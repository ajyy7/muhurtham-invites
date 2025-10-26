import React from "react";
import "./TeamSection.css";

const team = [
  {
    key: "a",
    name: "Ajay N",
    role: "Founder",
    img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/8_frjmbi.jpg" // replace with your real image
  },
  {
    key: "b",
    name: "Krishnapriya N",
    role: "Founder",
    img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/10_eolhol.jpg" // replace with your real image
  },
  {
    key: "c",
    name: "Sanat Wilson",
    role: "Founder",
    img: "https://res.cloudinary.com/dzry28yko/image/upload/v1761385326/9_ovhq4m.jpg" // replace with your real image
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">People Behind Muhurtham Invites</h2>

      {/* We add a class for each member so CSS can place them explicitly */}
      <div className="team-container">
        {team.map((member) => (
          <div key={member.key} className={`team-member member-${member.key}`}>
            <img src={member.img} alt={member.name} className="team-img" />
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
