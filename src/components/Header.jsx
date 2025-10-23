import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="https://res.cloudinary.com/dzry28yko/image/upload/v1761221659/logo_evn514.png" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
