import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FiPhoneCall } from "react-icons/fi";

function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const menuRef = useRef(null);

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

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cards">Cards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Call Icon */}
        <div className="call-icon" onClick={() => setContactOpen(!contactOpen)}>
          <FiPhoneCall size={22} color="#6a0019" />
        </div>

        {/* Contact Options (visible on click) */}
        {contactOpen && (
          <div className="contact-popup fade-slide-in">
            <a href="tel:+918281420241" className="popup-link">📞 Call Us</a>
            <a
              href="https://wa.me/918281420241"
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              💬 WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
