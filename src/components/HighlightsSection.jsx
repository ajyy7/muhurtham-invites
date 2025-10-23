import React from "react";
import "./HighlightsSection.css";

function HighlightsSection() {
  return (
    <section id="highlights" className="highlights">
      <h2>Our Special Touch</h2>
      <div className="highlight-grid">
        <div className="highlight">
          <h3>Elegant Designs</h3>
          <p>Every invitation is crafted with care and creativity for timeless appeal.</p>
        </div>
        <div className="highlight">
          <h3>Customization</h3>
          <p>Your story, your colors, your style — we make it yours.</p>
        </div>
        <div className="highlight">
          <h3>Eco-Friendly Prints</h3>
          <p>We use sustainable materials to celebrate responsibly.</p>
        </div>
      </div>
    </section>
    
  );
}

export default HighlightsSection;
