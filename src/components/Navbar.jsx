import { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <img src={logo} alt="CL Bhardwaj" className="navbar-logo-image" />
          CL Bhardwaj
        </a>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="navbar-link">Home</a></li>
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#services" className="navbar-link">Services</a></li>
          <li><a href="#approvals" className="navbar-link">Approvals</a></li>
          <li><a href="#why-us" className="navbar-link">Why Us</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>

        <a href="#contact" className="btn btn-primary navbar-cta">
          Get Consultation
        </a>

        <div 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;