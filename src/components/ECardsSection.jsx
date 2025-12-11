import React from "react";
import "./ECardsSection.css";

import ecard01 from "../assets/ecards/ecard01.png";
import ecard02 from "../assets/ecards/ecard02.png";
import ecard03 from "../assets/ecards/ecard03.png";
import ecard04 from "../assets/ecards/ecard04.png";
import ecard05 from "../assets/ecards/ecard05.png";
import ecard06 from "../assets/ecards/ecard06.png";
import ecard07 from "../assets/ecards/ecard07.png";

const ECardsSection = () => {
  const ecards = [
    { id: "01", src: ecard01 },
    { id: "02", src: ecard02 },
    { id: "03", src: ecard03 },
    { id: "04", src: ecard04 },
    { id: "05", src: ecard05 },
    { id: "06", src: ecard06 },
    { id: "07", src: ecard07 }
  ];

  return (
    <section className="ecards-section">
      <h2 className="ecards-title">E-Cards</h2>

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
