import React from "react";
import "./CardsSection.css";

const cards = [
  { title: "Wedding Invites", image: "gallery1.png", description: "Elegant and traditional wedding cards with a personal touch." },
  { title: "Engagement Invites", image: "gallery2.png", description: "Celebrate your engagement with style and grace." },
  { title: "Baby Shower Invites", image: "gallery3.png", description: "Adorable designs to welcome your little one." },
  { title: "Housewarming Invites", image: "gallery4.png", description: "Warm and welcoming designs for your new beginnings." },
  { title: "Birthday Invites", image: "gallery5.png", description: "Fun and creative designs for your birthday celebration." },
];

export default function CardsSection() {
  return (
    <section id="gallery" className="cards-section">
      <h2 className="cards-title">Our Beautiful Invites</h2>

      <div className="cards-scroll">
        {cards.map((c, idx) => (
          <article className="card" key={idx}>
            <div className="card-image-wrap">
              <img src={`/${c.image}`} alt={c.title} className="card-image" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{c.title}</h3>
              <p className="card-desc">{c.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
