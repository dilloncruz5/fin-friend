# filename: chatbot_api.py

from fastapi import FastAPI, Request # type: ignore
from fastapi.middleware.cors import CORSMiddleware
import requests

API_KEY = "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"  # Replace with your actual key

app = FastAPI()

# Allow frontend requests from browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Use specific domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    body = await request.json()
    user_input = body.get("message")

    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "deepseek/deepseek-r1",
        "messages": [{"role": "user", "content": user_input}]
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code == 200:
        reply = response.json()['choices'][0]['message']['content']
        return {"response": reply}
    else:
        return {"response": f"Error {response.status_code}: {response.text}"}
