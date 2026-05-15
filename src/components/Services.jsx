import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'installation',
    icon: "🏗️",
    title: "Installation Services",
    description: "Complete industrial installation solutions including SMPV, petroleum systems, and tank fabrication.",
    link: "/services/installation",
    subServices: [
      "SMPV Installation (Rule 2016)",
      "Petroleum Installation",
      "Tank Fabrication",
      "Pipeline Installation",
      "Fuel Tank Setup",
      "Industrial Equipment Installation",
      "Gas Cylinder 2016"
    ]
  },
  {
    id: 'petroleum-storage',
    icon: "⛽",
    title: "Petroleum Storage License",
    description: "Complete assistance in obtaining petroleum storage licenses for bulk storage facilities and retail outlets.",
    link: "/services/petroleum-storage",
    subServices: [
      "HSD License",
      "Petrol Storage License",
      "Diesel Storage License",
      "Underground Tank License",
      "Above Ground Tank License",
      "Retail Outlet License"
    ]
  },
  {
    id: 'fire-noc',
    icon: "🔥",
    title: "Fire NOC",
    description: "Comprehensive Fire No Objection Certificate services including plan approval and compliance certification.",
    link: "/services/fire-noc",
    subServices: []
  },
  {
    id: 'safety-compliance',
    icon: "⚠️",
    title: "Safety & Compliance",
    description: "Comprehensive industrial safety planning including risk assessment and emergency response planning.",
    link: "/services/safety-compliance",
    subServices: [
      "Explosive Approval",
      "Safety Audit",
      "Risk Assessment",
      "Emergency Planning",
      "Hazardous Area Classification"
    ]
  },
  {
    id: 'factory-license',
    icon: "🏭",
    title: "Factory License & Building Plan",
    description: "Complete support for factory licensing and building plan approvals from relevant authorities.",
    link: "/services/factory-license",
    subServices: [
      "Factory License",
      "Building Plan Approval",
      "Site Layout Approval",
      "Factory Act Compliance",
      "Municipal Approval",
      "Structural Drawing Approval"
    ]
  },
  {
    id: 'pollution-environmental',
    icon: "🌿",
    title: "Pollution & Environmental",
    description: "Assistance in obtaining Environmental NOC from State Pollution Control Boards.",
    link: "/services/pollution-environmental",
    subServices: [
      "Environmental Clearance",
      "Air & Water Consent"
    ]
  },
  
  {
    id: 'government-liaison',
    icon: "🏛️",
    title: "Government Liaison Services",
    description: "Professional liaison services with petroleum, explosive, fire, and pollution control departments.",
    link: "/services/government-liaison",
    subServices: [
      "PESO Approval",
      "Factory Inspector Approval",
      "Fire Department Approval",
      "Municipality Approval",
      "Petroleum Rules Compliance"
    ]
  },
  {
    id: 'renewals-amendments',
    icon: "🔄",
    title: "Renewals & Amendments",
    description: "Efficient services for license renewals, amendments, and modifications to existing approvals.",
    link: "/services/renewals-amendments",
    subServices: []
  },
  {
    id: 'gas-cylinder-2016',
    icon: "🔧",
    title: "Gas Cylinder 2016",
    description: "Specialized services for gas cylinder permissions, storage, and compliance under 2016 regulations.",
    link: "/services/gas-cylinder-2016",
    subServices: [
      "Gas Cylinder Storage License",
      "Gas Cylinder Filling Station",
      "Gas Cylinder Distribution",
      "Gas Cylinder Safety Compliance",
      "Gas Cylinder Transport Permission"
    ]
  },
  {
    id: 'smpv-rule-2016',
    icon: "📋",
    title: "SMPV Rule 2016",
    description: "Expert consultancy on Static and Mobile Pressure Vessels (SMPV) Rules 2016 for compliance.",
    link: "/services/smpv-rule-2016",
    subServices: [
      "SMPV Design Approval",
      "SMPV Installation Compliance",
      "SMPV Operation Guidelines",
      "SMPV Inspection Services",
      "SMPV Documentation",
      "SMPV Safety Certification"
    ]
  },
  {
    id: 'centralized-epr-portal',
    icon: "♻️",
    title: "Centralized EPR Portal",
    description: "Extended Producer Responsibility (EPR) compliance services for various waste categories.",
    link: "/services/centralized-epr-portal",
    subServices: [
      "EPR Batteries",
      "EPR E-Waste",
      "EPR Plastic",
      "EPR Used Oil"
    ]
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (service) => {
    if (service.link) {
      navigate(service.link);
    }
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-subtitle">Our Services</span>
          <h2 className="section-title">Comprehensive Consultancy Solutions</h2>
          <p className="section-description">
            We provide end-to-end consultancy services for petroleum licensing, industrial safety, 
            and regulatory compliance across India.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              className={`service-card ${service.subServices.length > 0 ? 'has-subservices' : ''}`}
              key={service.id}
              onClick={() => handleCardClick(service)}
              style={{ cursor: service.link ? 'pointer' : 'default' }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              {service.subServices.length > 0 && (
                <div className="subservices-preview">
                  <span className="subservices-count">
                    {service.subServices.length} services included
                  </span>
                  <div className="subservices-list">
                    {service.subServices.slice(0, 3).map((sub, idx) => (
                      <span key={idx} className="subservice-tag">{sub}</span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className="subservice-more">+{service.subServices.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}
              
              <div className="card-arrow">
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;