# Petroleum Consultancy Website - Complete Setup Guide

This guide will help you set up and run the complete contact & inquiry system with frontend and backend.

## Project Structure

```
myWebsite/
├── src/                    # React frontend
│   ├── components/
│   │   └── Contact.jsx    # Contact form component
│   └── index.css          # Global styles
├── backend/               # Node.js/Express backend
│   ├── config/
│   │   └── database.js    # MySQL connection
│   ├── models/
│   │   └── Inquiry.js     # Database model
│   ├── routes/
│   │   └── contactRoutes.js # API endpoints
│   ├── database/
│   │   └── init.sql       # SQL setup script
│   ├── .env               # Environment configuration
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── package.json           # Frontend dependencies
└── SETUP_GUIDE.md         # This file
```

## Prerequisites

Before starting, ensure you have:

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MySQL Server** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/)
3. **npm** (comes with Node.js)

## Step-by-Step Setup

### 1. MySQL Database Setup

#### Option A: Using MySQL Command Line

```bash
# Open MySQL command line or terminal
mysql -u root -p

# Enter your MySQL password, then run:
CREATE DATABASE petroleum_consultancy;
EXIT;
```

#### Option B: Using MySQL Workbench or phpMyAdmin

1. Open your MySQL management tool
2. Connect to your MySQL server
3. Create a new database named `petroleum_consultancy`

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment
# Edit .env file with your MySQL credentials
# Default values:
#   DB_HOST=localhost
#   DB_PORT=3306
#   DB_USER=root
#   DB_PASSWORD=your_mysql_password
#   DB_NAME=petroleum_consultancy

# Start the backend server
npm run dev
```

The backend will start on `http://localhost:5000`

**Expected output:**
```
✅ Connected to MySQL database successfully
✅ Inquiries table verified/created
🚀 Server running on port 5000
📡 API available at http://localhost:5000
```

### 3. Frontend Setup

Open a **new terminal/command prompt** (keep backend running):

```bash
# Navigate to project root
cd c:\myWebsite

# Install dependencies (if not already installed)
npm install

# Start the frontend development server
npm run dev
```

The frontend will start on `http://localhost:5173`

### 4. Test the System

1. **Open your browser** and go to `http://localhost:5173`
2. **Scroll to the Contact section** (or click "Contact" in navigation)
3. **Fill out the contact form**:
   - Full Name (required)
   - Phone Number (required)
   - Email Address (optional)
   - Service Required (optional)
   - Message (optional)
4. **Click "Send Message"**
5. **Check the response**:
   - Success message in green
   - Form clears automatically
   - Data saved to MySQL database

### 5. Verify Database Storage

```bash
# Connect to MySQL
mysql -u root -p petroleum_consultancy

# View all inquiries
SELECT * FROM inquiries ORDER BY created_at DESC;

# Exit
EXIT;
```

## Configuration

### Backend Environment (.env)

```env
# Database Configuration
DB_HOST=localhost          # MySQL server host
DB_PORT=3306              # MySQL server port
DB_USER=root              # MySQL username
DB_PASSWORD=              # MySQL password (leave empty if no password)
DB_NAME=petroleum_consultancy

# Server Configuration
PORT=5000                 # Backend server port
NODE_ENV=development      # Environment mode

# CORS Configuration
FRONTEND_URL=http://localhost:5173  # Frontend URL (Vite default)
```

### Frontend API Configuration

The frontend is configured to connect to `http://localhost:5000/api/contact` by default.

If you change the backend port, update the API URL in `src/components/Contact.jsx`:

```javascript
const response = await fetch('http://localhost:YOUR_PORT/api/contact', {
  // ...
});
```

## API Documentation

### POST /api/contact

Submit a contact form inquiry.

**Request Body:**
```json
{
  "full_name": "John Doe",
  "phone_number": "9876543210",
  "email_address": "john@example.com",
  "service_required": "petroleum-license",
  "message": "I need help with petroleum license"
}
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "message": "Thank you! Your inquiry has been submitted successfully. We will contact you soon.",
  "inquiryId": 1
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "full_name",
      "message": "Full name is required"
    },
    {
      "field": "phone_number",
      "message": "Phone number is required"
    }
  ]
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET /api/contact/inquiries

Get all inquiries (for admin purposes).

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "full_name": "John Doe",
      "phone_number": "9876543210",
      "email_address": "john@example.com",
      "service_required": "petroleum-license",
      "message": "I need help with petroleum license",
      "created_at": "2024-01-01T12:00:00.000Z",
      "updated_at": "2024-01-01T12:00:00.000Z"
    }
  ],
  "count": 1
}
```

## Validation Rules

The system validates the following:

- **full_name**: Required, 2-255 characters
- **phone_number**: Required, 10-15 digits (allows spaces, dashes, +, parentheses)
- **email_address**: Optional, must be valid email format if provided
- **service_required**: Optional, must be one of the predefined services
- **message**: Optional, maximum 2000 characters

## Common Issues & Solutions

### 1. Database Connection Error

**Problem:** "MySQL connection error" or "ECONNREFUSED"

**Solutions:**
- Ensure MySQL server is running
- Check credentials in `backend/.env`
- Verify database `petroleum_consultancy` exists
- Check MySQL is running on port 3306

### 2. CORS Error

**Problem:** "Access to fetch has been blocked by CORS policy"

**Solutions:**
- Ensure backend server is running
- Check `FRONTEND_URL` in `backend/.env` matches your frontend URL
- Restart backend after changing `.env`

### 3. Port Already in Use

**Problem:** "Port 5000 already in use" or "Port 5173 already in use"

**Solutions:**
- Change port in `backend/.env` (PORT=5001, etc.)
- Update frontend API URL accordingly
- Or kill the process using that port

### 4. npm install Fails

**Problem:** npm install fails with errors

**Solutions:**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure you have Node.js v14 or higher

### 5. Frontend Form Not Submitting

**Problem:** Form doesn't submit or shows network error

**Solutions:**
- Ensure backend is running on port 5000
- Check browser console for errors
- Verify API URL in `src/components/Contact.jsx`

## Testing the API Manually

You can test the API using curl or tools like Postman:

```bash
# Using curl
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"full_name\":\"Test User\",\"phone_number\":\"9876543210\",\"email_address\":\"test@example.com\",\"service_required\":\"petroleum-license\",\"message\":\"Test message\"}"

# Expected response:
# {"success":true,"message":"Thank you! Your inquiry has been submitted successfully. We will contact you soon.","inquiryId":1}
```

## Production Deployment

For production deployment:

1. **Set NODE_ENV=production** in `.env`
2. **Update CORS settings** to your production domain
3. **Use environment variables** for sensitive data
4. **Set up proper MySQL user** with limited permissions
5. **Enable HTTPS** for both frontend and backend
6. **Use a process manager** like PM2 for Node.js

## Support

If you encounter any issues not covered in this guide:

1. Check the backend console for error messages
2. Check browser console for frontend errors
3. Verify all configuration files are correct
4. Ensure all dependencies are installed

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/docs)

---

**Quick Start Commands:**

```bash
# Terminal 1 - Start Backend
cd backend
npm run dev

# Terminal 2 - Start Frontend
npm run dev

# Access Application
# Frontend: http://localhost:5173
# Backend API: http://localhost:5000