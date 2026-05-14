import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Inquiry from '../models/Inquiry.js';

const router = Router();

// Validation rules for contact form
const contactValidation = [
  body('full_name')
    .trim()
    .notEmpty()
    .withMessage('Full name is required')
    .isLength({ min: 2, max: 255 })
    .withMessage('Full name must be between 2 and 255 characters'),
  
  body('phone_number')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[\d\s\-\+\(\)]{10,15}$/)
    .withMessage('Please enter a valid phone number (10-15 digits)'),
  
  body('email_address')
    .optional({ checkFalsy: true })
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('service_required')
    .optional({ checkFalsy: true })
    .isIn([
      'petroleum-license',
      'explosive-approval',
      'hsd-license',
      'fire-noc',
      'smpv-rules',
      'pollution-noc',
      'other'
    ])
    .withMessage('Invalid service selection'),
  
  body('message')
    .optional({ checkFalsy: true })
    .isLength({ max: 2000 })
    .withMessage('Message must not exceed 2000 characters')
    .trim()
];

// POST /api/contact - Submit contact form
router.post(
  '/api/contact',
  contactValidation,
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array().map(err => ({
            field: err.path,
            message: err.msg
          }))
        });
      }

      // Extract validated data
      const { full_name, phone_number, email_address, service_required, message } = req.body;

      // Save to database
      const result = await Inquiry.create({
        full_name,
        phone_number,
        email_address,
        service_required,
        message
      });

      // Return success response
      res.status(201).json({
        success: true,
        message: 'Thank you! Your inquiry has been submitted successfully. We will contact you soon.',
        inquiryId: result.insertId
      });

    } catch (error) {
      console.error('Error submitting inquiry:', error);
      
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request. Please try again later.'
      });
    }
  }
);

// GET /api/contact/inquiries - Get all inquiries (admin endpoint)
router.get('/api/contact/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.findAll();
    
    res.json({
      success: true,
      data: inquiries,
      count: inquiries.length
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    
    res.status(500).json({
      success: false,
      message: 'Error fetching inquiries'
    });
  }
});

export default router;