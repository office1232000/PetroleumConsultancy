-- SQL script to create database and table manually if needed
-- Run this in MySQL if automatic table creation fails

-- Create database (uncomment if database doesn't exist)
-- CREATE DATABASE IF NOT EXISTS petroleum_consultancy;
-- USE petroleum_consultancy;

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email_address VARCHAR(255),
    service_required VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at),
    INDEX idx_service (service_required)
);

-- Optional: Insert sample data for testing
-- INSERT INTO inquiries (full_name, phone_number, email_address, service_required, message) 
-- VALUES 
-- ('John Doe', '9876543210', 'john@example.com', 'petroleum-license', 'I need help with petroleum license'),
-- ('Jane Smith', '9876543211', 'jane@example.com', 'fire-noc', 'Looking for Fire NOC consultation');