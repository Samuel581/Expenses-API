# Expense Tracker API

An API for managing expenses. This project allows users to create, read, update, and delete expenses, as well as manage authentication through JWT.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT
- Create, view, update, and delete expenses
- Filter expenses by different time ranges (e.g., past week, past month)
- Secure endpoints with JWT authorization

## Tech Stack

- **Node.js** - Backend runtime environment
- **Express** - Web framework for building RESTful APIs
- **Prisma ORM** - Database ORM (Object Relational Mapping) for interacting with MongoDB
- **TypeScript** - Static typing for JavaScript
- **JWT** - JSON Web Tokens for secure authentication
- **MongoDB** - Database for storing user and expense data

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (or use [MongoDB Atlas](https://www.mongodb.com/atlas) for a cloud database)
- [Git](https://git-scm.com/) for version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-tracker-api.git
   cd expense-tracker-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Variables).

4. Run database migrations (if using Prisma):

   ```bash
   npx prisma migrate dev
   ```

## Running the API

### Development

```bash
yarn run dev
```

### Production

```bash
yarn run build
yarn run start
```

## Environment Variables

Create a `.env` file in the root directory of the project with the following environment variables:

```env
DATABASE_URL=mongodb://localhost:27017/your-database-name
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

## Usage

1. Register a new user by sending a `POST` request to `/api/auth/register` with a JSON body containing `email` and `password` fields.
2. Log in with the registered user by sending a `POST` request to `/api/auth/login` with the same JSON body.
3. Use the JWT token received in the response to authenticate requests to protected endpoints.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in with an existing user

### Expenses

- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/:id` - Update an expense by ID
- `DELETE /api/expenses/:id` - Delete an expense by ID

