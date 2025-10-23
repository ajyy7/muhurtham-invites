import React from "react";
import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h2>Every Invite Tells a Story</h2>
        <p>Experience the art of meaningful beginnings through beautiful design.</p>
      </div>
    </section>
  );
}

export default VideoSection;
