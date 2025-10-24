import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Muhurtham Invites</h3>
          <p>
            Bringing timeless tradition and modern creativity together for every
            celebration.
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="mailto:muhurthaminvites@gmail.com"><FaEnvelope /></a>
          </div>
          <p>Email: muhurthaminvites@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{fontSize: '14px'}}>© 2025 Muhurtham Invites | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
