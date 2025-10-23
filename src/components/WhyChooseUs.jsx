import React from "react";

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white text-[#800020] text-center">
      <h2 className="text-4xl font-bold mb-4">Why Choose Muhurtham Invites?</h2>
      <p className="text-lg max-w-3xl mx-auto mb-10">
        Each invitation is designed with passion, precision, and emotion. We
        blend art with technology to deliver timeless beauty for your special
        moments.
      </p>

      <div className="flex justify-center gap-10 flex-wrap">
        <div className="bg-[#800020] text-white p-6 rounded-2xl w-72 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Custom Designs</h3>
          <p>Made exclusively for your occasion.</p>
        </div>
        <div className="bg-[#800020] text-white p-6 rounded-2xl w-72 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
          <p>Every card speaks elegance and emotion.</p>
        </div>
        <div className="bg-[#800020] text-white p-6 rounded-2xl w-72 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
          <p>Receive your invites right on time, every time.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
