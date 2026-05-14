import homeImage from '../assets/home.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">Petroleum & Industrial Safety Consultant</span>
          <h1 className="hero-title">
            Trusted Petroleum & Industrial Safety Consultant with 25+ Years of Experience
          </h1>
          <p className="hero-description">
            Expert consultancy in petroleum storage licensing, explosive department approvals, 
            fire safety NOC, and industrial compliance. Serving clients across India with 
            professional guidance and government liaison services.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-white">
              Schedule Consultation
            </a>
            <a href="#services" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
              Our Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-number">25+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Projects Completed</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={homeImage} alt="Industrial consultancy" />
          <div className="hero-image-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;