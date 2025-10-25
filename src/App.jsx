import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import VideoSection from "./components/VideoSection";
import CardsSection from "./components/CardsSection";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import HighlightsSection from "./components/HighlightsSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
<HeroSection />
<JourneySection />
<VideoSection />
<CardsSection />
<HighlightsSection />
<ReviewsSection />
<ServicesSection />
<TeamSection />
<Footer />
    </div>
  );
}

export default App;
