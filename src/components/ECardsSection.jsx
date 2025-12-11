import React from "react";
import "./ECardsSection.css";

import ecard01 from "../assets/ecards/ecard01.png";
import ecard02 from "../assets/ecards/ecard02.png";
import ecard03 from "../assets/ecards/ecard03.png";
import ecard04 from "../assets/ecards/ecard04.png";
import ecard05 from "../assets/ecards/ecard05.png";
import ecard06 from "../assets/ecards/ecard06.png";
import ecard07 from "../assets/ecards/ecard07.png";
import ecard08 from "../assets/ecards/ecard08.jpg";
import ecard09 from "../assets/ecards/ecard09.jpg";
import ecard10 from "../assets/ecards/ecard10.png";
import ecard11 from "../assets/ecards/ecard11.png";
import ecard12 from "../assets/ecards/ecard12.png";
import ecard13 from "../assets/ecards/ecard13.png";
import ecard14 from "../assets/ecards/ecard14.png";
import ecard15 from "../assets/ecards/ecard15.png";
import ecard16 from "../assets/ecards/ecard16.png";

const ECardsSection = () => {
  const ecards = [
    { id: "01", src: ecard01 },
    { id: "02", src: ecard02 },
    { id: "03", src: ecard03 },
    { id: "04", src: ecard04 },
    { id: "05", src: ecard05 },
    { id: "06", src: ecard06 },
    { id: "07", src: ecard07 },
    { id: "08", src: ecard08 },
    { id: "09", src: ecard09 },
    { id: "10", src: ecard10 },
    { id: "11", src: ecard11 },
    { id: "12", src: ecard12 },
    { id: "13", src: ecard13 },
    { id: "14", src: ecard14 },
    { id: "15", src: ecard15 },
    { id: "16", src: ecard16 }
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
