import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to section or navigate to homepage with hash
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If we're on a sub-page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
    } else {
      // If we're on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMobileMenu();
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); navigate('/'); closeMobileMenu(); }}>
          <img src={logo} alt="CL Bhardwaj" className="navbar-logo-image" />
          <span className="navbar-logo-text">CL Bhardwaj</span>
        </a>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#services" className="navbar-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#approvals" className="navbar-link">Approvals</a></li>
          <li><a href="#why-us" className="navbar-link">Why Us</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>

        {/* Desktop CTA Button */}
        <a href="#contact" className="btn btn-primary navbar-cta hidden-mobile">
          Get Consultation
        </a>

        {/* Mobile Hamburger Toggle - Only One */}
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-menu-list">
            <li>
              <a href="#home" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); navigate('/'); closeMobileMenu(); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#approvals" className="mobile-menu-link" onClick={closeMobileMenu}>
                Approvals
              </a>
            </li>
            <li>
              <a href="#why-us" className="mobile-menu-link" onClick={closeMobileMenu}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" className="mobile-menu-link" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
          <a 
            href="#contact" 
            className="btn btn-primary mobile-cta-btn"
            onClick={closeMobileMenu}
          >
            Get Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;