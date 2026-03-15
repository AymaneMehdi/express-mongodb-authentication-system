# Express MongoDB Authentication System

This is a Back-End API for **user authentication and account management**, built with **Node.js**, **Express.js**, and **MongoDB**. It provides JWT-based authentication, user registration, login, and email verification capabilities.

---

## Features

- User registration with email verification  
- User login with JWT authentication  
- Password management and security  
- MongoDB & Mongoose integration  
- Nodemailer for email notifications  
- Authentication middleware  
- CORS support  
- Environment-based configuration  

---

## Project Structure

```
express-mongodb-authentication-system/
├── controllers/           # Handles business logic
│   └── authController.js
│
├── middlewares/           # Middleware (auth, validation, etc.)
│   └── userAuth.js
│
├── models/                # Mongoose models (schemas)
│   └── userModel.js
│
├── routes/                # API routes
│   └── authRoutes.js
│
├── config/                # Configuration files
│   ├── mongodb.js         # MongoDB connection
│   └── nodemailer.js      # Email configuration
│
├── server.js              # Express app entry point
├── package.json           # Dependencies & scripts
└── .env                   # Environment variables (not included in repo)
```

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AymaneMehdi/express-mongodb-authentication-system.git
   cd express-mongodb-authentication-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_email_password
   ```

---

## Running the Project

### Development
```bash
npm run server
```

This will run the server at [http://localhost:5000](http://localhost:5000) with automatic restart on file changes.

### Production
```bash
node server.js
```

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Nodemailer** (for email notifications)  
- **dotenv** (for environment management)  

---

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user  
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/send-verify-otp` - Send OTP for email verification (requires authentication)
- `POST /api/auth/verify-email` - Verify email with OTP (requires authentication)
- `POST /api/auth/is-auth` - Check if user is authenticated (requires authentication)
- `POST /api/auth/send-reset-otp` - Send OTP for password reset
- `POST /api/auth/reset-password` - Reset password with OTP

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Author:** Aymane Mehdi
