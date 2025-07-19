
import os
import smtplib
from email.mime.text import MIMEText

import httpx
from dotenv import load_dotenv

load_dotenv()

SLACK_WEBHOOK_URL = os.getenv("SLACK_WEBHOOK_URL")
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")
SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = os.getenv("SMTP_PORT")
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL")


async def send_notifications(name: str, email: str, message: str):
    """
    Sends notifications to Slack, Telegram, and email if configured.
    """
    # Create the notification message text
    text = f"New contact form submission:\nName: {name}\nEmail: {email}\nMessage: {message}"

    async with httpx.AsyncClient() as client:
        # Send Slack notification only if the URL is valid
        if SLACK_WEBHOOK_URL and SLACK_WEBHOOK_URL.startswith("https://"):
            try:
                await client.post(SLACK_WEBHOOK_URL, json={"text": text})
            except Exception as e:
                print(f"Failed to send Slack notification: {e}")

        # Send Telegram notification only if configured
        if TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID:
            try:
                url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
                await client.post(url, json={"chat_id": TELEGRAM_CHAT_ID, "text": text})
            except Exception as e:
                print(f"Failed to send Telegram notification: {e}")

    # Send Email notification only if fully configured
    if all([SMTP_SERVER, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, RECIPIENT_EMAIL]):
        try:
            msg = MIMEText(text)
            msg["Subject"] = "New Contact Form Submission"
            msg["From"] = SMTP_USER
            msg["To"] = RECIPIENT_EMAIL

            with smtplib.SMTP(SMTP_SERVER, int(SMTP_PORT)) as server:
                server.starttls()
                server.login(SMTP_USER, SMTP_PASSWORD)
                server.send_message(msg)
        except Exception as e:
            print(f"Failed to send email: {e}") 