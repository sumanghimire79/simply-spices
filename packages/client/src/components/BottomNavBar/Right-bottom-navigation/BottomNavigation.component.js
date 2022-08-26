import React from 'react';
import { Link } from 'react-router-dom';

import './BottomNavigation.styles.css';

const BottomNavigation = () => {
  return (
    <>
      <div className="text">
        <span>
          {' '}
          <Link to="/about-us"> ABOUT US </Link>
        </span>
      </div>
      <div className="text">
        <span>
          {' '}
          <Link to="/contact-us"> CONTACT </Link>{' '}
        </span>
      </div>
      <div className="search-container">
        <input
          className="input-container"
          type="text"
          placeholder="| Search spices"
        />
      </div>
    </>
  );
};

export default BottomNavigation;
