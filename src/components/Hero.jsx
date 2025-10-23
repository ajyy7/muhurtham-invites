import React from "react";
import { motion } from 'framer-motion';
import "./Hero.css";

function Hero() {
  return (
    
    <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="https://res.cloudinary.com/dzry28yko/video/upload/v1761221379/AZj1TMEaehx5v6IfghR9Tg-AZj1TMEa6Cn1TkV6KOGS-g_qlkxcq.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Design Your Perfect Muhurtham Invite</h2>
        <p>
          Elegant, personalized, and beautifully crafted digital invites for every sacred occasion.
        </p>
        <button className="cta-btn">Explore Designs</button>
      </motion.div>
    </section>
  );
}

export default Hero;
