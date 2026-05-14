import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    email_address: '',
    service_required: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: '',
    loading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!formData.full_name.trim() || !formData.phone_number.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name and Phone Number)',
        loading: false
      });
      return;
    }

    // Phone number validation (10-15 digits)
    const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid phone number (10-15 digits)',
        loading: false
      });
      return;
    }

    // Email validation (if provided)
    if (formData.email_address && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_address)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address',
        loading: false
      });
      return;
    }

    setStatus({ type: '', message: '', loading: true });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your inquiry has been submitted successfully.',
          loading: false
        });
        
        // Clear form on success
        setFormData({
          full_name: '',
          phone_number: '',
          email_address: '',
          service_required: '',
          message: ''
        });
      } else {
        // Handle validation errors from backend
        let errorMessage = data.message || 'An error occurred. Please try again.';
        
        if (data.errors && data.errors.length > 0) {
          errorMessage = data.errors.map(err => err.message).join('. ');
        }
        
        setStatus({
          type: 'error',
          message: errorMessage,
          loading: false
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message: 'Unable to connect to server. Please try again later.',
        loading: false
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="section-subtitle">Contact Us</span>
          <h2>Get Professional Consultation</h2>
          <p className="contact-text">
            Ready to start your petroleum licensing or industrial safety compliance journey? 
            Contact us today for expert guidance and personalized solutions tailored to your 
            business needs.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-content">
                <h4>Phone Numbers</h4>
                <p>+91 9810101970</p>
                <p>+91 9313333100</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-content">
                <h4>Email Address</h4>
                <p>clbhardwaj@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-content">
                <h4>Office Location</h4>
                <p>Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-icon">🕐</div>
              <div className="contact-item-content">
                <h4>Business Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="full_name">Full Name *</label>
              <input 
                type="text" 
                id="full_name" 
                name="full_name" 
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number *</label>
              <input 
                type="tel" 
                id="phone_number" 
                name="phone_number" 
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter your phone number" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email_address">Email Address</label>
              <input 
                type="email" 
                id="email_address" 
                name="email_address" 
                value={formData.email_address}
                onChange={handleChange}
                placeholder="Enter your email address" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service_required">Service Required</label>
              <select 
                id="service_required" 
                name="service_required"
                value={formData.service_required}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="petroleum-license">Petroleum Storage License</option>
                <option value="explosive-approval">Explosive Department Approval</option>
                <option value="hsd-license">HSD Storage License</option>
                <option value="fire-noc">Fire NOC</option>
                <option value="smpv-rules">SMPV Rules Consultancy</option>
                <option value="pollution-noc">Pollution Control Board NOC</option>
                <option value="other">Other Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirements..."
              ></textarea>
            </div>
            
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <button 
              type="submit" 
              className="form-submit"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;