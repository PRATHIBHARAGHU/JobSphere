from fastapi import APIRouter
from schemas.chat import ChatRequest, ChatResponse
from services.langchain_service import ask_career_chatbot

router = APIRouter(prefix="/chat", tags=["chat"])


@router.post("/ask_career", response_model=ChatResponse)
def ask_career_chatbot_endpoint(request: ChatRequest):
    response_text = ask_career_chatbot(request.message, session_id=request.session_id)
    return {"response": response_text}
