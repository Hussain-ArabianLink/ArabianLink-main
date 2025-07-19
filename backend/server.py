
import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

try:
    from .notifications import send_notifications
except ImportError:
    from notifications import send_notifications

# Explicitly load .env file from the backend directory
env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path)

app = FastAPI()

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

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]

class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    company: str | None = None
    service: str
    message: str
    urgency: str

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
