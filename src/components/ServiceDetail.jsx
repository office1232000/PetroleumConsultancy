import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const servicesData = {
    'installation': {
      title: "Installation Services",
      icon: "🏗️",
      description: "Our expert team provides comprehensive industrial installation services for petroleum, manufacturing, and processing facilities. With years of experience in the field, we ensure every installation meets the highest standards of safety, efficiency, and reliability.",
      subServices: [
        {
          name: "SMPV Installation (Rule 2016)",
          description: "Professional installation of Storage, Mixing, and Processing Vessels (SMPV) as per Rule 2016 for industrial applications with precision engineering and safety compliance.",
          icon: "🔧"
        },
        {
          name: "Petroleum Installation",
          description: "Complete petroleum system installation including pumps, dispensers, storage systems, and fuel handling equipment for optimal performance.",
          icon: "⛽"
        },
        {
          name: "Tank Fabrication",
          description: "Custom tank fabrication services for storage and processing needs, built to industry specifications with quality materials and expert craftsmanship.",
          icon: "🛢️"
        },
        {
          name: "Pipeline Installation",
          description: "Expert pipeline installation for fuel transportation systems, ensuring leak-proof connections and efficient flow management across facilities.",
          icon: "🔗"
        },
        {
          name: "Fuel Tank Setup",
          description: "Complete fuel tank installation services including above-ground and underground tanks with proper foundation and safety systems.",
          icon: "🏗️"
        },
        {
          name: "Industrial Equipment Installation",
          description: "Professional installation of heavy industrial machinery and equipment with precision alignment and commissioning services.",
          icon: "⚙️"
        },
        {
          name: "Gas Cylinder 2016",
          description: "Specialized gas cylinder installation and setup services compliant with 2016 regulations for storage and distribution facilities.",
          icon: "🔧"
        }
      ]
    },
    'petroleum-storage': {
      title: "Petroleum Storage License",
      icon: "⛽",
      description: "We provide complete assistance in obtaining petroleum storage licenses for bulk storage facilities, retail outlets, and industrial consumption. Our expert team ensures smooth processing and compliance with all regulatory requirements.",
      subServices: [
        {
          name: "HSD License",
          description: "High Speed Diesel storage licensing for industrial and commercial applications with complete documentation support.",
          icon: "📋"
        },
        {
          name: "Petrol Storage License",
          description: "Comprehensive licensing solutions for petrol storage facilities ensuring safety and regulatory compliance.",
          icon: "⛽"
        },
        {
          name: "Diesel Storage License",
          description: "Specialized services for diesel storage licensing including tank farm approvals and safety compliance.",
          icon: "🛢️"
        },
        {
          name: "Underground Tank License",
          description: "Expert guidance for underground storage tank licensing with environmental and safety considerations.",
          icon: "🏗️"
        },
        {
          name: "Above Ground Tank License",
          description: "Complete licensing support for above-ground storage tanks with fire safety and structural compliance.",
          icon: "🏭"
        },
        {
          name: "Retail Outlet License",
          description: "End-to-end assistance for retail petroleum outlet licensing including location approval and operational permits.",
          icon: "🏪"
        }
      ]
    },
    'fire-noc': {
      title: "Fire NOC",
      icon: "🔥",
      description: "Our comprehensive Fire No Objection Certificate services cover all aspects of fire safety compliance. From initial plan approval to final inspection coordination, we ensure your facility meets all fire safety standards and regulatory requirements.",
      subServices: [
        {
          name: "Fire Plan Approval",
          description: "Expert preparation and submission of fire safety plans for approval from fire departments.",
          icon: "📐"
        },
        {
          name: "Fire Inspection Coordination",
          description: "Professional coordination with fire department officials for site inspections and compliance verification.",
          icon: "👨‍🚒"
        },
        {
          name: "Fire Safety Equipment",
          description: "Guidance on installation and maintenance of fire safety equipment as per regulatory standards.",
          icon: "🧯"
        },
        {
          name: "Fire NOC Renewal",
          description: "Timely renewal services for Fire NOC to ensure continuous compliance and operational continuity.",
          icon: "🔄"
        }
      ]
    },
    'safety-compliance': {
      title: "Safety & Compliance",
      icon: "⚠️",
      description: "We offer comprehensive industrial safety planning services including risk assessment, safety audits, and emergency response planning. Our expert team ensures your operations meet all safety standards and regulatory requirements.",
      subServices: [
        {
          name: "Explosive Approval",
          description: "Expert guidance for obtaining approvals from the Explosive Department for storage and handling of hazardous materials.",
          icon: "💥"
        },
        {
          name: "Safety Audit",
          description: "Comprehensive safety audits to identify potential hazards and ensure compliance with safety regulations.",
          icon: "📊"
        },
        {
          name: "Risk Assessment",
          description: "Detailed risk assessment services to evaluate and mitigate potential safety hazards in industrial operations.",
          icon: "⚠️"
        },
        {
          name: "Emergency Planning",
          description: "Development of comprehensive emergency response plans for industrial facilities and hazardous operations.",
          icon: "🚨"
        },
        {
          name: "Hazardous Area Classification",
          description: "Professional classification of hazardous areas as per regulatory standards and safety requirements.",
          icon: "🗺️"
        }
      ]
    },
    'factory-license': {
      title: "Factory License & Building Plan",
      icon: "🏭",
      description: "Complete support for factory licensing and building plan approvals from relevant authorities and municipal corporations. Our team handles all aspects of the approval process to ensure smooth project execution.",
      subServices: [
        {
          name: "Factory License",
          description: "Complete factory licensing services including documentation, inspection coordination, and compliance verification.",
          icon: "📜"
        },
        {
          name: "Building Plan Approval",
          description: "Expert preparation and submission of building plans for approval from municipal and development authorities.",
          icon: "🏗️"
        },
        {
          name: "Site Layout Approval",
          description: "Professional site layout planning and approval services ensuring optimal space utilization and compliance.",
          icon: "📐"
        },
        {
          name: "Factory Act Compliance",
          description: "Comprehensive compliance services under the Factories Act for worker safety and operational standards.",
          icon: "⚖️"
        },
        {
          name: "Municipal Approval",
          description: "Complete municipal approval services for industrial and commercial construction projects.",
          icon: "🏛️"
        },
        {
          name: "Structural Drawing Approval",
          description: "Expert structural drawing preparation and approval services ensuring structural integrity and safety.",
          icon: "📋"
        }
      ]
    },
    'pollution-environmental': {
      title: "Pollution & Environmental",
      icon: "🌿",
      description: "We assist in obtaining Environmental NOC from State Pollution Control Boards for industrial and petroleum facilities. Our services ensure complete environmental compliance and sustainable operations.",
      subServices: [
        {
          name: "CPCB NOC",
          description: "Central Pollution Control Board NOC services for large-scale industrial and petroleum projects.",
          icon: "🏛️"
        },
        {
          name: "SPCB Consent",
          description: "State Pollution Control Board consent services for establishment and operation of industrial facilities.",
          icon: "📋"
        },
        {
          name: "Hazardous Waste Authorization",
          description: "Complete authorization services for handling, storage, and disposal of hazardous waste materials.",
          icon: "☣️"
        },
        {
          name: "Environmental Clearance",
          description: "Comprehensive environmental clearance services including EIA studies and public hearing coordination.",
          icon: "🌍"
        },
        {
          name: "Air & Water Consent",
          description: "Consent services under Air and Water Acts for industrial emissions and effluent discharge.",
          icon: "💧"
        },
        {
          name: "CTE (Consent to Establish)",
          description: "Consent to Establish from pollution control boards for setting up new industrial facilities with environmental safeguards.",
          icon: "🏭"
        },
        {
          name: "Bio Medical Waste (BMW) Authorization",
          description: "Authorization services for handling, treatment, and disposal of bio medical waste as per regulatory guidelines.",
          icon: "🏥"
        }
      ]
    },
    'government-liaison': {
      title: "Government Liaison Services",
      icon: "🏛️",
      description: "Professional liaison services with petroleum, explosive, fire, and pollution control departments for smooth approvals. Our experienced team ensures timely clearances and maintains strong relationships with regulatory authorities.",
      subServices: [
        {
          name: "PESO Approval",
          description: "Expert liaison for Petroleum and Explosives Safety Organisation approvals for storage and handling facilities.",
          icon: "💥"
        },
        {
          name: "Factory Inspector Approval",
          description: "Professional coordination with factory inspectors for plan approval and operational clearances.",
          icon: "👨‍💼"
        },
        {
          name: "Fire Department Approval",
          description: "Complete liaison services with fire departments for NOC and safety compliance approvals.",
          icon: "🔥"
        },
        {
          name: "Municipality Approval",
          description: "Expert handling of municipal approvals for construction, zoning, and operational permits.",
          icon: "🏛️"
        },
        {
          name: "Petroleum Rules Compliance",
          description: "Comprehensive compliance services under Petroleum Rules for storage, transport, and handling operations.",
          icon: "⚖️"
        }
      ]
    },
    'renewals-amendments': {
      title: "Renewals & Amendments",
      icon: "🔄",
      description: "Efficient services for license renewals, amendments, and modifications to existing approvals and permissions. We ensure timely renewals to prevent operational disruptions and handle all amendment processes smoothly.",
      subServices: [
        {
          name: "License Renewal",
          description: "Timely renewal services for all types of industrial and petroleum licenses to ensure continuous operations.",
          icon: "📅"
        },
        {
          name: "License Amendment",
          description: "Professional handling of license amendments for changes in capacity, location, or operational scope.",
          icon: "✏️"
        },
        {
          name: "Permission Modification",
          description: "Expert services for modifying existing permissions and approvals as per changing requirements.",
          icon: "🔄"
        },
        {
          name: "Compliance Updates",
          description: "Regular compliance updates and documentation for maintaining valid licenses and permissions.",
          icon: "📊"
        }
      ]
    },
    'gas-cylinder-2016': {
      title: "Gas Cylinder 2016",
      icon: "🔧",
      description: "Specialized services for gas cylinder permissions, storage, and compliance under 2016 regulations. We ensure complete compliance with safety standards and regulatory requirements.",
      subServices: [
        {
          name: "Gas Cylinder Storage License",
          description: "Complete licensing services for gas cylinder storage facilities with proper safety measures and documentation.",
          icon: "🏭"
        },
        {
          name: "Gas Cylinder Filling Station",
          description: "Permission and setup services for gas cylinder filling stations with compliance to 2016 regulations.",
          icon: "⛽"
        },
        {
          name: "Gas Cylinder Distribution",
          description: "Distribution license and permission services for gas cylinder supply chain operations.",
          icon: "🚚"
        },
        {
          name: "Gas Cylinder Safety Compliance",
          description: "Comprehensive safety compliance services for gas cylinder handling, storage, and transportation.",
          icon: "⚠️"
        },
        {
          name: "Gas Cylinder Transport Permission",
          description: "Transport permission services for safe and legal movement of gas cylinders across regions.",
          icon: "📋"
        }
      ]
    },
    'smpv-rule-2016': {
      title: "SMPV Rule 2016",
      icon: "📋",
      description: "Expert consultancy on Static and Mobile Pressure Vessels (SMPV) Rules 2016 for design, installation, and operation compliance. We ensure your pressure vessel operations meet all regulatory requirements.",
      subServices: [
        {
          name: "SMPV Design Approval",
          description: "Design approval services for static and mobile pressure vessels as per SMPV Rule 2016 standards.",
          icon: "📐"
        },
        {
          name: "SMPV Installation Compliance",
          description: "Complete compliance services for SMPV installation including documentation and inspection coordination.",
          icon: "🔧"
        },
        {
          name: "SMPV Operation Guidelines",
          description: "Development of operational guidelines and procedures for safe SMPV operations.",
          icon: "📖"
        },
        {
          name: "SMPV Inspection Services",
          description: "Regular inspection and certification services for pressure vessels to ensure ongoing compliance.",
          icon: "🔍"
        },
        {
          name: "SMPV Documentation",
          description: "Complete documentation support for SMPV registration, licensing, and compliance records.",
          icon: "📄"
        },
        {
          name: "SMPV Safety Certification",
          description: "Safety certification services for pressure vessels including testing and validation.",
          icon: "✅"
        }
      ]
    },
    'centralized-epr-portal': {
      title: "Centralized EPR Portal",
      icon: "♻️",
      description: "Extended Producer Responsibility (EPR) compliance services for various waste categories through the centralized portal. We help manufacturers and producers meet their EPR obligations efficiently.",
      subServices: [
        {
          name: "EPR Batteries",
          description: "EPR compliance services for battery waste management including collection, recycling, and reporting.",
          icon: "🔋"
        },
        {
          name: "EPR E-Waste",
          description: "Extended Producer Responsibility compliance for electronic waste management and recycling.",
          icon: "💻"
        },
        {
          name: "EPR Plastic",
          description: "EPR services for plastic waste management including packaging material compliance and recycling.",
          icon: "🥤"
        },
        {
          name: "EPR Used Oil",
          description: "EPR compliance for used oil management including collection, processing, and disposal tracking.",
          icon: "🛢️"
        }
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="not-found">
          <h2>Service Not Found</h2>
          <p>The requested service could not be found.</p>
          <button onClick={() => navigate('/')} className="back-home-btn">
            <FaArrowLeft /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="page-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <FaArrowLeft /> Back to Home
        </button>
        <div className="breadcrumb">
          <span onClick={() => navigate('/')} className="breadcrumb-item">Home</span>
          <span className="breadcrumb-separator">/</span>
          <span 
            onClick={() => {
              navigate('/#services');
              // Scroll to services section after navigation
              setTimeout(() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }, 100);
            }} 
            className="breadcrumb-item"
          >
            Services
          </span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">{service.title}</span>
        </div>
        <div className="service-icon-large">{service.icon}</div>
        <h1>{service.title}</h1>
        <p className="page-subtitle">{service.description}</p>
      </div>

      {service.subServices.length > 0 && (
        <div className="subservices-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="subservices-grid">
              {service.subServices.map((subService, index) => (
                <div key={index} className="subservice-card">
                  <div className="subservice-icon">{subService.icon}</div>
                  <h3>{subService.name}</h3>
                  <p>{subService.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact our team of experts to discuss your requirements.</p>
        <button className="cta-button" onClick={() => navigate('/#contact')}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;