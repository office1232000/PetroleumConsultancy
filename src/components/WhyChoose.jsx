const WhyChoose = () => {
  return (
    <section className="why-choose" id="why-us">
      <div className="container">
        <div className="why-choose-header">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Trusted by Leading Industries</h2>
        </div>
        
        <div className="why-choose-grid">
          <div className="why-choose-item">
            <div className="why-choose-icon">🎯</div>
            <h3>Expert Guidance</h3>
            <p>
              With 21+ years of experience, we provide expert guidance through complex 
              regulatory processes, ensuring smooth approvals and compliance.
            </p>
          </div>
          
          <div className="why-choose-item">
            <div className="why-choose-icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>
              Our established relationships with government authorities enable faster 
              processing of applications and timely project completion.
            </p>
          </div>
          
          <div className="why-choose-item">
            <div className="why-choose-icon">🛡️</div>
            <h3>100% Compliance</h3>
            <p>
              We ensure complete compliance with all statutory requirements, minimizing 
              risks and ensuring long-term operational safety.
            </p>
          </div>
          
          <div className="why-choose-item">
            <div className="why-choose-icon">🌐</div>
            <h3>Pan-India Network</h3>
            <p>
              Our extensive network across India allows us to serve clients in multiple 
              states with consistent quality and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;