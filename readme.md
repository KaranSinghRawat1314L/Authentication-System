# Full-Stack Authentication System

A production-oriented full-stack authentication system implementing secure user registration and login with a stateless backend architecture, type-safe validation, and real-world cloud deployment.

---

## Overview

This project demonstrates how authentication systems are built and deployed in real-world applications. It focuses on security, correctness, maintainability, and deployment readiness rather than UI-heavy features.

The system is split into two independently deployable services:

- Backend API built with Node.js, Express, and TypeScript
- Frontend client built with React, TypeScript, and Tailwind CSS

Both services communicate via REST APIs and are deployed on modern cloud platforms.

---

## Features

### Authentication
- User registration and login
- Secure password hashing using bcrypt
- Stateless backend architecture
- Input validation on both frontend and backend

### Backend
- Node.js + Express with TypeScript
- Prisma ORM for database access
- PostgreSQL (Neon – managed cloud database)
- Centralized error handling
- Zod-based schema validation
- Environment-based configuration
- Production-ready build pipeline

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Hook Form + Zod for type-safe forms
- React Query for API state management
- Context API for global user state
- Clean separation of UI and data logic

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- React Query

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- bcrypt
- Zod

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Neon PostgreSQL

---

## Architecture

Client (React)
  |
  | HTTP (REST)
  v
Backend API (Express)
  |
  | Prisma ORM
  v
PostgreSQL (Neon)

Design decisions:
- Backend is stateless, enabling horizontal scaling
- Cloud-hosted database ensures persistence across deployments
- Validation enforced at both compile-time and runtime
- Frontend and backend deployed independently

---

## Folder Structure

```

Authentication-System/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── index.ts
│   ├── prisma/
│   │   └── schema.prisma
│   ├── dist/
│   ├── package.json
│   └── tsconfig.json
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── main.tsx
│   ├── index.html
│   └── package.json

```

---

## Environment Variables

### Backend (.env)

```

DATABASE_URL=postgresql://<username>:<password>@<host>/<database>
PORT=5000

```

### Frontend (.env)

```

VITE_API_BASE_URL=[https://authentication-system-wgz0.onrender.com](https://authentication-system-wgz0.onrender.com)

```

---

## Local Development

### Backend

```

cd Backend
npm install
npx prisma generate
npm run dev

```

### Frontend

```

cd Frontend
npm install
npm run dev

```

---

## Deployment

### Backend (Render)

Build Command:
```

npm install && npm run build

```

Start Command:
```

npm start

```

Uses compiled output from the dist folder.

---

### Frontend (Vercel)

Framework: Vite + React

Build Command:
```

npm run build

```

Output Directory:
```

dist

```

---

## Security Considerations

- Passwords are never stored in plaintext
- Passwords are hashed using bcrypt with salt
- Backend validation prevents malformed requests
- Environment variables are used for secrets
- No sensitive data is exposed to the client

---

## Limitations & Future Improvements

- JWT-based authentication can be added
- Refresh tokens and role-based access control
- Rate limiting and brute-force protection
- Email verification and password reset
- Logging and monitoring integration

---

## What This Project Demonstrates

- Understanding of real-world authentication flows
- Secure backend design practices
- Type-safe full-stack development
- Cloud-native deployment mindset
- Clean and maintainable project structure

---

## Author

Karan Singh Rawat

