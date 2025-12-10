import React from "react";
import "./AnimatedVideosSection.css";

const AnimatedVideosSection = () => {
  const animatedVideos = [
    { id: "01", src: "/src/assets/animated-videos/video01.mp4" }
  ];

  return (
    <section className="animated-section">
      <h2 className="animated-title">Animated Videos (₹499/-)</h2>

      <div className="animated-scroll">
        {animatedVideos.map((video) => (
          <div key={video.id} className="animated-card">
            <video
              src={video.src}
              className="animated-video"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="video-number">{video.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedVideosSection;
