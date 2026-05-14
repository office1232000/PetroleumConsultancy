# Petroleum Consultancy Backend API

A Node.js/Express.js backend system for handling contact form inquiries with MySQL database.

## Features

- ✅ POST `/api/contact` - Submit contact form data
- ✅ Input validation (required fields, email format, phone number format)
- ✅ MySQL database storage
- ✅ CORS enabled for frontend communication
- ✅ Error handling and proper HTTP responses

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server (v5.7 or higher)
- npm or yarn

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Edit the `.env` file with your MySQL credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=petroleum_consultancy

PORT=5000
NODE_ENV=development

FRONTEND_URL=http://localhost:5173
```

### 3. Create MySQL Database

Open MySQL and run:

```sql
CREATE DATABASE petroleum_consultancy;
```

The `inquiries` table will be created automatically when the server starts. Alternatively, you can manually create it using the provided SQL script:

```bash
mysql -u root -p petroleum_consultancy < database/init.sql
```

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

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

**Success Response (201):**
```json
{
  "success": true,
  "message": "Thank you! Your inquiry has been submitted successfully. We will contact you soon.",
  "inquiryId": 1
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "full_name",
      "message": "Full name is required"
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

Get all inquiries (admin endpoint).

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
      "created_at": "2024-01-01T12:00:00.000Z"
    }
  ],
  "count": 1
}
```

## Validation Rules

- **full_name**: Required, 2-255 characters
- **phone_number**: Required, 10-15 digits (allows spaces, dashes, +, parentheses)
- **email_address**: Optional, must be valid email format if provided
- **service_required**: Optional, must be one of the predefined services
- **message**: Optional, maximum 2000 characters

## Database Schema

```sql
CREATE TABLE inquiries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  full_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  email_address VARCHAR(255),
  service_required VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Project Structure

```
backend/
├── config/
│   └── database.js      # MySQL connection configuration
├── models/
│   └── Inquiry.js       # Inquiry model with database operations
├── routes/
│   └── contactRoutes.js # API routes and validation
├── database/
│   └── init.sql         # SQL script for manual table creation
├── .env                 # Environment variables
├── .env.example         # Example environment file
├── server.js            # Main server file
├── package.json         # Dependencies
└── README.md            # This file
```

## Connecting Frontend

The frontend contact form (in `src/components/Contact.jsx`) is already configured to send data to this backend API.

The form sends a POST request to `http://localhost:5000/api/contact` with the following data structure:

```javascript
{
  full_name: string,
  phone_number: string,
  email_address: string,
  service_required: string,
  message: string
}
```

## Troubleshooting

### Database Connection Issues

If you see "MySQL connection error", check:
1. MySQL server is running
2. Database `petroleum_consultancy` exists
3. Credentials in `.env` are correct

### CORS Issues

If you see CORS errors in the browser console:
1. Ensure `FRONTEND_URL` in `.env` matches your frontend URL
2. Restart the backend server after changing `.env`

### Port Already in Use

If port 5000 is already in use, change the `PORT` value in `.env` and update the frontend API URL accordingly.

## License

This project is part of the petroleum consultancy website system.