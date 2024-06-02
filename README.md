# Next.js Google Authentication with Auth.js, Prisma, and MongoDB

This repository demonstrates how to implement Google authentication in a Next.js 14 application using NextAuth.js 5 (beta), Prisma ORM, and MongoDB.

## Overview

This project sets up a robust authentication system leveraging Google's OAuth 2.0 for user authentication, Prisma for database management, and MongoDB as the database. It includes:

-   Google OAuth 2.0 authentication using NextAuth.js
-   Prisma ORM for database interactions
-   MongoDB as the database

## Features

-   User authentication with Google
-   Persistent user sessions
-   Protected routes
-   User data stored in MongoDB

## Getting Started

### Prerequisites

-   Node.js
-   npm
-   MongoDB

### Setup

1. **Clone the Repository**

```bash
git clone https://github.com/SSazzadur/nextjs-google-auth
cd next-google-auth
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables**

Create a `.env` file in the root directory and add the necessary environment variables as shown in the `.env.example` file:

```env
AUTH_GOOGLE_ID=<your-google-client-id>
AUTH_GOOGLE_SECRET=<your-google-client-secret>
AUTH_SECRET=<your-auth-secret>
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority&appName=<app-name>"
```

4. **Run the Development Server**

```bash
npm run dev
```
