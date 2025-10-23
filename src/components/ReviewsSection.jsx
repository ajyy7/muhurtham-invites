import React, { useEffect } from "react";
import "./ReviewsSection.css";

const reviews = [
  {
    name: "Arjun & Meera",
    text: "Loved the invites! The design truly captured our theme and tradition beautifully.",
  },
  {
    name: "Vikram",
    text: "Exceptional quality and delivery on time! Highly recommended for unique designs.",
  },
  {
    name: "Sneha & Ramesh",
    text: "They brought our story to life with such elegance. The team was so patient and kind!",
  },
  {
    name: "Devika",
    text: "Perfect blend of culture and modern touch. Everyone loved our wedding cards!",
  },
];

const CustomerReviews = () => {
  useEffect(() => {
    const container = document.querySelector(".reviews-scroll");
    let scrollAmount = 0;
    const slideInterval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      }
    }, 30);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-scroll">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">“{review.text}”</p>
            <h4 className="review-name">– {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
