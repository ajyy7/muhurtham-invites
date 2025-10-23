import React from "react";
import "./JourneySection.css";

function JourneySection() {
  return (
    <section id="journey" className="journey">
      <div className="journey-content">
        <h2>Our Journey</h2>
        <p>
          What began as a small passion for creating elegant invitations has blossomed into a heartfelt
          brand that celebrates every moment of joy. At <strong>Muhurtham Invites</strong>, each design
          captures emotions that last a lifetime — crafted with love, care, and a personal touch.
        </p>
      </div>
      <div className="journey-image">
        <img src="https://res.cloudinary.com/dzry28yko/image/upload/v1761222252/gallery6_rtlz7i.png" alt="Our Journey" />
      </div>
    </section>
  );
}

export default JourneySection;
