import React from 'react';
import './AboutUs.styles.css';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="corporate-info">
      <span className="text-big">
        {' '}
        <Link to="/about-us"> About Us </Link>{' '}
      </span>

      <a href="# ">
        <span className="text-small">Our partners</span>
        <span className="text-small">Sustainability</span>
        <span className="text-small">Terms of Service</span>
      </a>
    </div>
  );
};
