
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <img src="https://res.cloudinary.com/dzry28yko/image/upload/v1761221659/logo_evn514.png" alt="Muhurtham Invites" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
