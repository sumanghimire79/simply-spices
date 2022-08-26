import React from 'react';

import './ContactFeedback.styles.css';

export const ContactUsFeedback = () => {
  return (
    <div className="feedback-section">
      <div className="feedback-message-section">
        <div className="heading-section">
          <h1 className="simple-spices-heading-feedback">Simply Spices</h1>
          <img
            src="assets/vectors/vector_logo_underline.svg"
            alt="logo style"
            className="main-slogan-vector-style"
          />
        </div>
        <div className="feedback-message">
          <p>Your message has been sent.</p>
          <p className="thank-you">Thank You!</p>
          <p>
            Your opinion matters to us and
            <br /> we will respond as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};
