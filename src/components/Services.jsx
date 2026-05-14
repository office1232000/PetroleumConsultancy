const services = [
  {
    icon: "⛽",
    title: "Petroleum Storage License",
    description: "Complete assistance in obtaining petroleum storage licenses for bulk storage facilities, retail outlets, and industrial consumption."
  },
  {
    icon: "💥",
    title: "Explosive Department Approval",
    description: "Expert guidance for obtaining approvals from the Explosive Department for storage, handling, and transportation of explosive materials."
  },
  {
    icon: "🛢️",
    title: "HSD Storage License",
    description: "Specialized services for High Speed Diesel (HSD) storage licensing, including tank farm approvals and safety compliance."
  },
  {
    icon: "🔧",
    title: "Gas Cylinder Permission",
    description: "Assistance in obtaining permissions for gas cylinder storage, filling stations, and distribution facilities as per safety norms."
  },
  {
    icon: "🧯",
    title: "Fire NOC",
    description: "Comprehensive Fire No Objection Certificate services including plan approval, inspection coordination, and compliance certification."
  },
  {
    icon: "📋",
    title: "SMPV Rules Consultancy",
    description: "Expert consultancy on Static and Mobile Pressure Vessels (SMPV) Rules for design, installation, and operation compliance."
  },
  {
    icon: "📜",
    title: "Petroleum Rules 2002",
    description: "Complete compliance solutions under Petroleum Rules 2002 for storage, transport, and handling of petroleum products."
  },
  {
    icon: "🏭",
    title: "Industrial Safety Planning",
    description: "Comprehensive industrial safety planning including risk assessment, safety audits, and emergency response planning."
  },
  {
    icon: "🔄",
    title: "License Renewal & Amendments",
    description: "Efficient services for license renewals, amendments, and modifications to existing approvals and permissions."
  },
  {
    icon: "🏛️",
    title: "Government Liaison Services",
    description: "Professional liaison services with petroleum, explosive, fire, and pollution control departments for smooth approvals."
  },
  {
    icon: "🌿",
    title: "Pollution Control Board NOC",
    description: "Assistance in obtaining Environmental NOC from State Pollution Control Boards for industrial and petroleum facilities."
  },
  {
    icon: "🏗️",
    title: "Factory License & Building Plan",
    description: "Complete support for factory licensing and building plan approvals from relevant authorities and municipal corporations."
  }
];

const Services = () => {
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
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;