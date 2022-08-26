import React from 'react';

import './AboutUs.styles.css';

export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="simple-spices-heading">Simply Spices</div>
      <img
        src="assets/vectors/vector_logo_underline.svg"
        alt="logo style"
        className="main-slogan-vector-style"
      />
      <h3 className="about-heading">About us</h3>
      <div>
        <p className="about-us-description">
          Founded in 1990, the company offers finest spices and herbs
          <br /> for superstar chefs everywhere.
        </p>
        <p className="about-us-description">
          We are proud of our global network of farmers and distributors
          <br /> who keep delivering unparalleled quality.
        </p>
        <p className="about-us-description">
          We are committed to sustaining our core values:
          <br />
          quality, sustainability and extraordinary flavour.
        </p>
      </div>
    </div>
  );
};
