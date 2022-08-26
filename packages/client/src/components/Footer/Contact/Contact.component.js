import React from 'react';
import './Contact.styles.css';

import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="contact-info">
      <span className="text-big ">
        {' '}
        <Link to="/contact-us"> Contact Us</Link>
      </span>
      <div className="text-small phone-text">
        <img
          src="/assets/vectors/vector_receiver.svg"
          alt="Canvas phone Logo"
          className="phone"
        />
        <span>+45 666 555</span>
      </div>
      <div className="text-small">
        <img
          src="/assets/vectors/vector_envelope.svg"
          alt="Canvas envelop Logo"
          className="envelop"
        />
        <a href="# ">
          {' '}
          <span className="email-underline">spice @ kbh.dk</span>{' '}
        </a>
      </div>
    </div>
  );
};
