import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    { title: "E-Cards", desc: "Beautifully crafted digital invitation cards." },
    { title: "Animation Video", desc: "Animated wedding invitations full of life." },
    { title: "PDF with Location Links", desc: "Easy-to-share PDFs with embedded map links." },
    { title: "Card Printing", desc: "Premium quality printed invitations." },
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((s, index) => (
          <div className="service-card" key={index}>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
