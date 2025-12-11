import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const menuRef = useRef(null);

  // WhatsApp Auto Message (URL Encoded)
  const autoMessage = encodeURIComponent(
    "Hi, I am interested in your invitation designs. Please share more details."
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setContactOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar" ref={menuRef}>
        
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dzry28yko/image/upload/v1761221659/logo_evn514.png"
          alt="Muhurtham Logo"
          className="nav-logo"
        />

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cards">Cards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Icon */}
        <div className="call-icon" onClick={() => setContactOpen(!contactOpen)}>
          <FiPhoneCall size={22} color="#6a0019" />
        </div>

        {/* Contact Popup */}
        {contactOpen && (
          <div className="contact-popup fade-slide-in">

            {/* Call */}
            <a href="tel:+918547491297" className="popup-link">
              <span className="icon-wrapper">
                <FiPhoneCall size={20} />
              </span>
              <span>Call Us</span>
            </a>

            {/* WhatsApp with Auto Message */}
            <a
              href={`https://wa.me/918547491297?text=${autoMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              <span className="icon-wrapper">
                <FaWhatsapp size={20} color="#25D366" />
              </span>
              <span>WhatsApp</span>
            </a>

          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
