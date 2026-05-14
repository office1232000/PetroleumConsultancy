import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCogs, FaIndustry, FaTools, FaGasPump, FaWater, FaHardHat } from 'react-icons/fa';
import './InstallationServices.css';

const InstallationServices = () => {
  const navigate = useNavigate();

  const installationServices = [
    {
      icon: <FaIndustry />,
      title: "SMPV Installation",
      description: "Professional installation of Storage, Mixing, and Processing Vessels (SMPV) for industrial applications with precision engineering and safety compliance."
    },
    {
      icon: <FaGasPump />,
      title: "Petroleum Installation",
      description: "Complete petroleum system installation including pumps, dispensers, storage systems, and fuel handling equipment for optimal performance."
    },
    {
      icon: <FaTools />,
      title: "Tank Fabrication",
      description: "Custom tank fabrication services for storage and processing needs, built to industry specifications with quality materials and expert craftsmanship."
    },
    {
      icon: <FaWater />,
      title: "Fuel Pipeline Installation",
      description: "Expert pipeline installation for fuel transportation systems, ensuring leak-proof connections and efficient flow management across facilities."
    },
    {
      icon: <FaHardHat />,
      title: "Industrial Equipment Installation",
      description: "Professional installation of heavy industrial machinery and equipment with precision alignment and commissioning services."
    },
    {
      icon: <FaCogs />,
      title: "Storage Tank Installation",
      description: "Complete storage tank installation services including above-ground and underground tanks with proper foundation and safety systems."
    }
  ];

  return (
    <div className="installation-services-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>
        <div className="breadcrumb">
          <span onClick={() => navigate('/')} className="breadcrumb-item">Home</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">Installation Services</span>
        </div>
        <h1>Installation Services</h1>
        <p className="page-subtitle">
          Complete industrial installation solutions for petroleum, manufacturing, and processing facilities
        </p>
      </div>

      <div className="services-overview">
        <div className="overview-content">
          <h2>Comprehensive Installation Solutions</h2>
          <p>
            Our expert team provides end-to-end installation services for industrial equipment, 
            petroleum systems, and processing facilities. With years of experience in the field, 
            we ensure every installation meets the highest standards of safety, efficiency, and reliability.
          </p>
          <div className="overview-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Safety Record</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="installation-cards">
        <h2>Our Installation Services</h2>
        <div className="cards-grid">
          {installationServices.map((service, index) => (
            <div key={index} className="installation-card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Installation Project?</h2>
        <p>Contact our team of experts to discuss your industrial installation requirements.</p>
        <button className="cta-button" onClick={() => navigate('/#contact')}>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default InstallationServices;