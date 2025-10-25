import React from "react";
import "./TeamSection.css";

function TeamSection() {
  const team = [
    { name: "Ajay N", role: "Founder", img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/8_frjmbi.jpg" },
    { name: "Krishnapriya N", role: "Founder", img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/10_eolhol.jpg" },
    { name: "Sanat Wilson", role: "Founder", img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/9_ovhq4m.jpg" },
  ];

  return (
    <section id="team" className="team-section">
      <h2 className="team-title">People Behind Muhurtham Invites</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
