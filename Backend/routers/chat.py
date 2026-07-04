from fastapi import APIRouter
from schemas.chat import ChatResponse
from services.langchain_service import ask_career_chatbot

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("/ask", response_model=ChatResponse)
def ask_career_chatbot_endpoint(message: str, session_id: str = "user1"):
    response_text = ask_career_chatbot(message, session_id=session_id)
    return {"response": response_text}
