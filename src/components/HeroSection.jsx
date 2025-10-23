import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <img src="https://res.cloudinary.com/dzry28yko/image/upload/v1761221659/hero-image_wv9mdy.jpg" alt="Hero Background" className="hero-image" />
      <div className="hero-content">
        <h2>Welcome to Muhurtham Invites</h2>
        <p className="text-white text-lg md:text-xl mt-4 max-w-2xl text-center mx-auto">
            Crafting moments of joy and togetherness with personalized elegance.</p>
        <button className="cta-btn">Explore More</button>
      </div>
    </section>
  );
}

export default HeroSection;
