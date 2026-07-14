# Fast-API-app

## Creating fast api application

# CRUD operations
- Create
- Read
- Update
- Delete

# Rest API
- Get
- POST
- PUT 
- DELETE

# status codes
- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorised
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 409 Conflict
- 500 Internal Serval Error

# Architecture of fastapi application
- Model -- {Defines database tables}
- Router -- {routes requests to controller}
- Controller -- {Controls the logic, endpoints}
- Service -- {buisiness logic}
- Repository -- {data access layer}
- Middleware -- {request processing pipeline}
- Schema -- {Static models for validation}

# database
## relational databases
- mysql
- postgressql
- sqlite
- sql server

## non-relational databases
- mongoDB
- dynamodb
- redis
- cassandra


# constraints in database {imp}
- primary key --eg: student_id, staff_id
- foriegn key --eg: department_id in std table
- unique --eg: email
- not null --eg: name
- check --eg: salary>0
- default --eg: timestamp: func.now()

# mysql example
CREATE TABLE Students(
  Student_ID int PRIMARY KEY, 
  LastName varchar(255) NOT NULL,
  FirstName varchar(255)
);

# Modules
- SQLAlchemy -- orm (object Relational mappinng)
- fastapi -- web framework
- uvicorn -- server for running fastapi application ---> 'uvicorn app.main:app --reload'
- psycopg2 -- postgresql driver
- Swagger AI -- validation of API
- Pydantic -- Data validation
- typing-extensions -- type hints
- alembic -- database migration tool

# Concepts:
- ORM 
    - Object Mapping -->to convert pythonm code to sql commands without writing SQL commands
- Depends
    - Dependancy injection -->To install dependencies into router handlers
- Session maker 
    - To create a session with Database
- SessionLocal 
    - To create session with the database for a single request
- declarative_base 
    - To create a base class for all the models

# Alembic - to modify tables or constraints of a particular table in models of postgres
- pip install alembic
- alembic init alembic -- creates new file alembic

- alembic -> env.py ->  from imported models -> metadata data
- alembic.ini -->  SQLALCHEMY url to postgres database ---> postgresql://user:password@host:port/database_name

- alembic revision --autogenerate -m "Initial migration"
You will have a new version update with def upgrade() in that for eg:713e98317319.py before doing upgrade check that.
- alembic upgrade head  -- to upgrade the file

## Frontend

- node -v
- npm install -g typescript
- tsc --version

- node "File_name.js"
### Typescript
- tsc "filename.ts" ----> create a new js file in the same name
- node "filename.js"

- npm init -y --- creates package.json

### Vite
-  npm install vite@latest
- npm create vite@latest-talentspark  ---> down arrow -->react --> typescript.

http://localhost:5173/



# for user authentication in JWT
- pip install passlib --- used to encrypt passwords
# hashing algorithm
argon2
bcrypt

- pip install python-jose[cryptography]

- Jose --> used to create jwt tokens --> used to authenticate and authorize users its in the format xxxx.yyyy.zzzz basically 3 parts 
1. header -> algo + token type: {alg:HS256, typ:JWT}
2. payload -> data, for eg: {user_id:1, role:admin}
3. signature -> used to clarify the token: {hash(header + payload + secretkey)}
- access token -> used to acces protected resources
- refresh tokens -> used to refresh access tokens


pip install python-multipart

## Utils 

## RBAC
- Role Based Access Control
-> used to give different permissionsto different roles
-> eg: admin can do anything, user can do only specific things
-> use oauth2 module to implement RBAC
-> get_current_user() - for authenticated user
-> role_required() - fro role based access control
-> create_access_token() - for creating access token with(secret_key, algorithm, payload) - token created then 
->verify_access_token() - for decoding acess token with (Secret  key, algorith.token) - token decoded then

## Flow of application 
1. login --> create access token 
2. access token --> get current user
3. current user --> get role --> role_required --> access protected resources



LLM - Large Language Models
Tokenization - sentence into words in list -> like this ["","",""]

Embeddingd- sentence into vector numbers -> like this [1,2,3,4,5]

Transformer -> "self attention mechanism" -> it is used to give the weights to the words in the sentence

SSE - Server sent events -> it is used to send the response from server to client in form of chunks of text so that we can show the response in form of chunks of text like chatbot ui

RAG -Retrival Augmented Generation - it is used to increase the accuracy of llm by providing relevant information to llm

context-window - it is the maximum number of words that the llm can process at a time

langchain -> its a framework to build llm's, its useful to connect llm to external sources of information -> like database, files, websites -> it is used to create complex workflows of llm -> like chatbot that can answer questions about specific documents


-Vercel ---> 
"user"://"password"

#### every llm has a default model --> Transformers

RAG - Retrival Augmented Generation
It is used to increase the accuracy of llm by providing relevant information to the llm -> it is used to increase the accuracy of llm by providing relevant information to the llm


How will it make chunks in vector db?
let's say we have 3 documents --> each one has 100 words so it will make 3 chunks -- each chunk will overlap with previous chunk by 100 chars -> so each chunk will have 500 chars
like 0-499 --> 400-899 ---> 800-1399

this chunk will be converted into vectors
eg: I am a developer, I have 3 years of expirience in python developement. I have good knowledge of python developement and I am  good python developer. I have good knowledge of fastapi 
--> will convert all the 3 chunks into vectors

#### godlocks principle ---> just right amount of information
semantic search -> It is used to find the most relevant information to the query -> It is used to find the most relevant information to query.

semantic similarity
It is used to find the most similar vectors
if two vectors are close to each other and similar

cosine similarity -> used iin nlp to find the similarity between two vectors

quadrantdb -is a vector database
it is used to store the vectors and do the semantic search
embeddings model -> it is used to convert the text into vectors

initially without rag
user query -> send to llm -> here transformers model will answer based on its training data -> response

with rag
user query -> embed done by embeddings model -> vector -> semantic search done by quadrantdb(vectordb) -> retrieve relevant chunks -> construct prompt -> combined text+query -> llm -> response

## Before Deployement checklist
.env configured
on startup create all tables in db
async await in every api and function and sessions handling for all apis
exception handeling for all apis ->
eg.
1. resourse not found
2. internal server error
3. bad request
4. unauthorized 
5. forbidden
6. validation error
7. email already exists
8. password incorrect
9. company not found


# LLM
- pip install langchain
- pip install langchain-community
- pip install langchain-google-genai
- pip install python-dotenv
- pip install langchain-ollama -if ollama using locally
