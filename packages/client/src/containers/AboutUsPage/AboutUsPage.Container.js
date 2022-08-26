import React from 'react';
import './AboutUsPage.Style.css';
import { AboutUs } from '../../components/About-us/AboutUs.component';

import { Button } from '../../components/Button/Button.component';
import { Link } from 'react-router-dom';

export const AboutUsPage = () => {
  return (
    <div className="about-us-page-container">
      <AboutUs className="main-slogan-vector-style about-us-description about-heading" />

      <div className="shop-btn">
        <Link to="/">
          {' '}
          <Button size="medium" label="SHOP" icon="" />
        </Link>
      </div>
    </div>
  );
};
