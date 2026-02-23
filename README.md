Login Page Project
==================

Requirements:
- Git
- Node.js

----------------------------------------

Setup Instructions:

1. Clone the repository:
   git clone https://github.com/EduardoRXD/Login-Page

2. Enter the "cadastro" folder:
   cd Login-Page/cadastro
   npm install

3. Configure the API:
   cd ../Api
   npm install dotenv

----------------------------------------

Database Setup (MongoDB):

1. Go to the MongoDB website and create an account.
2. Create a new cluster.
3. Create a database user with username and password.
4. Click "Get Connection String" and copy the URL.
5. Inside the Api folder, create a file named .env
   Make sure the file extension is exactly ".env" (not .txt).

Example .env file:
DATABASE_URL="mongodb+srv://yourDbUser:YourDbPassword@users.g49m0bu.mongodb.net/YourClusterName?retryWrites=true&w=majority"

----------------------------------------

Prisma Setup:

1. In the "Api" folder, run:
   npx prisma generate

----------------------------------------

Running the Project:

1. Backend (API):
   In the "Api" folder, run:
   node --watch server.js

2. Frontend (Cadastro):
   In the "cadastro" folder, run:
   npm run dev

----------------------------------------

Access:

Open your browser and go to the localhost link shown in the console.
For example:

http://localhost:5173

