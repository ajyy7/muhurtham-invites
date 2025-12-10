import React from "react";
import "./CardsSection.css";

const cards = [
  { title: "Wedding Invites", image: "https://res.cloudinary.com/dzry28yko/image/upload/v1761220376/6_o47f3y.jpg", description: "Elegant and traditional wedding cards with a personal touch." },
  { title: "Engagement Invites", image: "https://res.cloudinary.com/dzry28yko/image/upload/v1761220378/7_ziye6o.jpg", description: "Celebrate your engagement with style and grace." },
  { title: "Baby Shower Invites", image: "https://res.cloudinary.com/dzry28yko/image/upload/v1761220377/5_ywsvbk.jpg", description: "Adorable designs to welcome your little one." },
  { title: "Housewarming Invites", image: "https://res.cloudinary.com/dzry28yko/image/upload/v1761220376/4_g5arvm.jpg", description: "Warm and welcoming designs for your new beginnings." },
  { title: "Birthday Invites", image: "https://res.cloudinary.com/dzry28yko/image/upload/v1761220376/1_auvpiw.jpg", description: "Fun and creative designs for your birthday celebration." },
];

export default function CardsSection() {
  return (
    <section id="gallery" className="cards-section">
      <h2 className="cards-title">For Your Celebrations</h2>

      <div className="cards-scroll">
        {cards.map((c, idx) => (
          <article className="card" key={idx}>
            <div className="card-image-wrap">
              <img src={c.image} alt={c.title} className="card-image" />
            </div>
            <div className="card-body">
              <h4 className="card-title">{c.title}</h4>
              <h6 class="card-desc">{c.description}</h6>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
