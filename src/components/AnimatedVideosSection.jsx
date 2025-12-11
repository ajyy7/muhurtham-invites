import React from "react";
import "./AnimatedVideosSection.css";

import video01 from "../assets/animated-videos/video01.mp4";
import video02 from "../assets/animated-videos/video02.mp4";
import video03 from "../assets/animated-videos/video03.mp4";
import video04 from "../assets/animated-videos/video04.mp4";
import video05 from "../assets/animated-videos/video05.mp4";

const AnimatedVideosSection = () => {
  const videos = [
    { id: "AV1", src: video01 },
    { id: "AV2", src: video02 },
    { id: "AV3", src: video03 },
    { id: "AV4", src: video04 },
    { id: "AV5", src: video05 },
  ];
  

  return (
    <section className="animated-videos-section">
      <h2 className="animated-title">Animated Videos</h2>

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
