# 🔐 Fullstack Login System with React, Express, Prisma, and SQLite

This project is a simple but secure fullstack login system using:

- Frontend: React + TypeScript + TailwindCSS + React Hook Form + Zod
- Backend: Node.js + Express + TypeScript + Prisma ORM
- Database: SQLite (for dev/testing)

---

## ✨ Features

- 🔐 Secure login with server-side validation
- 🔎 Form validation using Zod + React Hook Form
- ⚡ Backend API with Express + Prisma ORM
- 🔄 API communication via `axios` and `@tanstack/react-query`
- 🔒 Passwords hashed using `bcryptjs`

---

## 📁 Project Structure

├── backend/ 
│ ├── controllers/ 
│ │ └── userController.ts # login handler 
│ ├── routes/ 
│ │ └── userRoutes.ts # /api/users/login 
│ ├── prisma/ 
│ │ ├── schema.prisma 
│ │ └── seed.ts # seed test users 
│ ├── index.ts # Express app 
│ └── .env # environment config 
├── frontend/ 
│ ├── components/ 
│ │ └── LoginForm.tsx 
│ │ └── LoginInput.tsx 
│ ├── App.tsx 
│ ├── index.css 
│ ├── main.tsx

---

## 🚀 Getting Started

    ### 1. Clone the repo
        git clone https://github.com/your-username/fullstack-login.git
        cd fullstack-login
    🛠️ Backend Setup
    
        Go to the backend folder:
            cd backend
    
        Install dependencies:
            npm install
            Setup Prisma:
            npx prisma generate
            npx prisma db push
        Seed the database:
            npx ts-node prisma/seed.ts
        Start the server:
            npm run dev
        Server runs at: http://localhost:4000
    
    💻 Frontend Setup
        Go to frontend:
            cd frontend
        Install dependencies:
            npm install
            npm install react-form-hook
            npm install @tanstack/react-query
            npm install -D typescript @types/react @types/react-dom
            npm install zod
        Start React app:
            npm run dev
        App runs at: http://localhost:5173 (if using Vite)
    
    ✅ Example Test Users
        Email	                    Password
        Yuvraj@example.com	        123456
        Anamika@example.com	        abcdef
        karan@example.com	        qwerty
    
    📦 Tech Stack
        React + TypeScript
        Tailwind CSS
        React Hook Form + Zod
        Express.js
        Prisma ORM
        SQLite   
        axios 
        tanstack/react-query
    
    🧠 Future Enhancements
        JWT authentication
        User registration endpoint
        Role-based auth (admin/user)
        MongoDB or PostgreSQL support
        Forgot Password flow
    
    