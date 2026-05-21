const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">CL</div>
              Chhagan Lal Bhardwaj
            </div>
            <p className="footer-description">
              Leading petroleum and industrial safety consultant with 25+ years of experience. 
              Specializing in petroleum licensing, explosive approvals, fire safety NOC, and 
              complete industrial compliance solutions across India.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#approvals">Approvals</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Our Services</h4>
            <div className="footer-links">
              <a href="#services">Petroleum Storage License</a>
              <a href="#services">Explosive Department Approval</a>
              <a href="#services">HSD Storage License</a>
              <a href="#services">Fire NOC</a>
              <a href="#services">SMPV Rules Consultancy</a>
              <a href="#services">Pollution Control NOC</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span>📍</span>
                <p>Noida, Uttar Pradesh, India</p>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <p>+91 9810101970</p>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <p>+91 9313333100</p>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <p>+91 8595199425</p>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <p>0120-4107353</p>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <p>+91 9870523489</p>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <p>clbhardwaj@gmail.com</p>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <p>bhardwaj@petrodrawing.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2026 Chhagan Lal Bhardwaj. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;