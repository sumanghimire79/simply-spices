import React from 'react';
import './Footer.styles.css';
import { AboutUs } from './About/AboutUs.component';
import { Contact } from './Contact/Contact.component';
import { Map } from './Map/Map.component';
import { Address } from './Address/Address.component';

export const Footer = () => {
  return (
    <div className="whole-footer-container">
      <div className="footer-up-background">
        <div className="footer-up-container">
          <AboutUs />
          <Contact />
          <Map />
          <Address />
        </div>
      </div>

      <div className="footer-down-background">
        <div className="footer-down-container">
          <p>Copyright info...</p>
        </div>
      </div>
    </div>
  );
};
