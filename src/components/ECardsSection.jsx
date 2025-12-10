import React from "react";
import "./ECardsSection.css";

const ECardsSection = () => {
  const ecards = [
    { id: "01", src: "/src/assets/ecards/ecard01.png" },
    { id: "02", src: "/src/assets/ecards/ecard02.png" },
    { id: "03", src: "/src/assets/ecards/ecard03.png" },
    { id: "04", src: "/src/assets/ecards/ecard04.png" },
    { id: "05", src: "/src/assets/ecards/ecard05.png" },
    { id: "06", src: "/src/assets/ecards/ecard06.png" }
  ];

  return (
    <section className="ecards-section">
      <h2 className="ecards-title">E-Cards (₹299/- per card)</h2>

      <div className="ecards-scroll">
        {ecards.map((ecard) => (
          <div key={ecard.id} className="ecard-card">
            <img src={ecard.src} alt="" className="ecard-img" />
            <div className="ecard-number">{ecard.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ECardsSection;
