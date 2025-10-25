import React from "react";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-12 text-center bg-[#6A0019] overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">
        About Muhurtham Invites
      </h2>

      <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        We believe that every wedding is a beautiful story. Our invitation cards
        are designed to reflect your traditions, love, and the promise of a
        lifetime. Each card is crafted with elegance, precision, and emotion.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
        <img
          src="https://i.imgur.com/RHdI5eO.png"
          alt="Design 1"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-yellow-400 shadow-lg"
        />
        <img
          src="https://i.imgur.com/RJhcQjF.png"
          alt="Design 2"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-yellow-400 shadow-lg"
        />
      </div>
    </section>
  );
}

export default AboutSection;
