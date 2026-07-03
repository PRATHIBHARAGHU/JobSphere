
## To run the application
### Initialise virtual environment 
- python -m venv env ----> - .\env\Scripts\activate e<tab>S<tab>a<tab>
### Install requirements 
- pip install -r re<tab>
### Run the application
#### Run Backend
 - uvicorn app.main:app --reload
#### Run frontend 
- npm run dev


## Architecture
backend/
    app/
        -- main.py
        -- database.py
    models/
        -- users.py
        -- company.py
        -- job.py
    schemas/
        -- users.py
        -- company.py
        -- job.py
    routers/
        -- users.py
        -- company.py
        -- job.py
    utils.py/
        -- oauth2.py
        -- security.py
        -- token.py
        --
    alembic.ini
    alembic/env.py
    









https://meet.google.com/ens-mkxd-wgb