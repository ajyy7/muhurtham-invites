import React from "react";
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

function CustomerReviews() {
  // Duplicate the reviews list for seamless looping
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>
      <div className="reviews-slider">
        <div className="review-track">
          {doubledReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <p className="review-text">“{review.text}”</p>
              <h4 className="review-name">– {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
