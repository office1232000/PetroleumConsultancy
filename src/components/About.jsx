const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop" alt="Chhagan Lal Bhardwaj" />
          <div className="about-image-accent"></div>
        </div>
        <div className="about-content">
          <span className="section-subtitle">About Us</span>
          <h2>Expert Petroleum & Industrial Safety Consultancy</h2>
          <p className="about-text">
            Chhagan Lal Bhardwaj is a renowned Architect and Industrial Consultant with over 25 years 
            of extensive experience in petroleum licensing, explosive department approvals, and 
            industrial safety compliance. Our consultancy has been instrumental in helping businesses 
            navigate complex regulatory frameworks and obtain necessary approvals for petroleum storage, 
            gas handling, and industrial operations across India.
          </p>
          <p className="about-text">
            We specialize in providing end-to-end solutions for petroleum storage licensing, fire safety 
            NOC, SMPV rules compliance, and liaison services with government authorities. Our deep 
            understanding of Petroleum Rules 2002, explosive regulations, and pollution control norms 
            enables us to deliver efficient and compliant solutions to our clients.
          </p>
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">✓</div>
              <span className="about-feature-text">25+ Years Experience</span>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">✓</div>
              <span className="about-feature-text">Licensed Consultant</span>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">✓</div>
              <span className="about-feature-text">Pan-India Services</span>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon">✓</div>
              <span className="about-feature-text">Government Liaison</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;