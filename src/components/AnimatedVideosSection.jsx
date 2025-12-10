import React from "react";
import "./AnimatedVideosSection.css";

import video01 from "../assets/animated-videos/video01.mp4";

const AnimatedVideosSection = () => {
  const videos = [{ id: "AV1", src: video01 }];
  

  return (
    <section className="animated-videos-section">
      <h2 className="animated-title">Animated Videos (₹499/- per car)</h2>

      <div className="animated-scroll">
        {videos.map((vid) => (
          <div key={vid.id} className="video-card">
            <video
  className="animated-video"
  src={vid.src}
  controls
  controlsList="nodownload nofullscreen noremoteplayback"
  preload="metadata"
  disablePictureInPicture
/>


            <div className="video-number">{vid.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedVideosSection;
