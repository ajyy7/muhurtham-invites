import React from "react";
import "./AnimatedVideosSection.css";

import video01 from "../assets/animated-videos/video01.mp4";

const AnimatedVideosSection = () => {
  const videos = [
    { id: "01", src: video01 }
  ];

  return (
    <section className="animated-videos-section">
      <h2 className="animated-title">Animated Videos (₹499/- per card)</h2>

      <div className="animated-scroll">
        {videos.map((vid) => (
          <div key={vid.id} className="video-card">
            <video
              className="animated-video"
              src={vid.src}
              controls
              preload="metadata"
            />
            <div className="video-number">{vid.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedVideosSection;
