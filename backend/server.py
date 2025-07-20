
import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from urllib.parse import urlparse
from datetime import datetime, timezone
from pymongo import IndexModel, ASCENDING
import asyncio


try:
    from .notifications import send_notifications
except ImportError:
    from notifications import send_notifications


app = FastAPI()


@app.on_event("startup")
async def startup_event():
    # Ensure the TTL index is created when the application starts.
    # This runs only once, making it efficient.
    collection = app.mongodb_client[os.getenv("DB_NAME")].contact_submissions
    index_name = "createdAt_ttl_index"
    
    # Check if our specific named index already exists.
    existing_indexes = await collection.index_information()
    if index_name not in existing_indexes:
        print(f"Creating TTL index '{index_name}' on 'contact_submissions' collection...")
        # 90 days in seconds (90 days * 24 hours/day * 60 minutes/hour * 60 seconds/minute)
        ninety_days_in_seconds = 90 * 24 * 60 * 60
        ttl_index = IndexModel(
            [("createdAt", ASCENDING)],
            name=index_name,
            expireAfterSeconds=ninety_days_in_seconds
        )
        await collection.create_indexes([ttl_index])
        print("TTL index created successfully.")
    else:
        print(f"TTL index '{index_name}' already exists.")


# CORS Middleware
origins = [
    "http://localhost:3000",
    "http://localhost:3001",
]

# Add the production frontend URL from an environment variable if it exists
FRONTEND_URL = os.getenv("FRONTEND_URL")
if FRONTEND_URL:
    origins.append(FRONTEND_URL)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URI = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

# Attach the client to the app instance to be accessible in startup events.
app.mongodb_client = AsyncIOMotorClient(MONGO_URI)
db = app.mongodb_client[DB_NAME]


class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    company: str | None = None
    service: str
    message: str
    urgency: str
    # This field automatically adds a UTC timestamp when a new form is created.
    createdAt: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

@app.post("/api/contact")
async def contact(form: ContactForm):
    """
    Receives contact form data, saves it to MongoDB, and sends notifications.
    """
    form_dict = form.dict()
    await db.contact_submissions.insert_one(form_dict)
    await send_notifications(form_dict)
    return {"message": "Form submitted successfully"}

@app.get("/")
async def read_root():
    return {"message": "Welcome to the ArabianLink API"}
