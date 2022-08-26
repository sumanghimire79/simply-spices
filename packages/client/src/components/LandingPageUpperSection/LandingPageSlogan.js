import React from 'react';
import './LandingPageSlogan.styles.css';
import { Button } from '../Button/Button.component';

export const LandingPageSlogan = () => {
  return (
    <div className="slogan-body">
      <div className="landing-page-slogan">
        <p className="slogan-title">Simply Spices</p>
        <p className="slogan-p">Taste the joy of flavour ...</p>
        <img
          src="/assets/vectors/vector_logo_underline.svg"
          alt="slogan-vector"
        />
      </div>
      <div className="slogan-button">
        <a href="#listed-products">
          {' '}
          <Button icon="" label="SHOP" type="shop" />
        </a>
      </div>
    </div>
  );
};
