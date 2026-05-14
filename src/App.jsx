import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <Contact />
          <Footer />
        </>
      } />
      <Route path="/services/:serviceId" element={
        <>
          <ServiceDetail />
        </>
      } />
    </Routes>
  );
}

export default App;