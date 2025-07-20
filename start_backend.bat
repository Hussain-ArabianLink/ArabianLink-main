@echo off
cd backend
call .\venv\Scripts\activate.bat
uvicorn server:app --reload 