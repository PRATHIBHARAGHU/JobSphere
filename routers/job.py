from fastapi import APIRouter

router=APIRouter(prefix="/job",tags=["job"])

@router.get("/")
def read_job():
    return{"Job": "Job root"}

@router.get("/{job_id}")
def read_Job(job: int):
    return {"Job_id": "job_id"}

