import React from 'react';

import './PageNotFound.styles.css';

const PageNotFound = () => {
  return (
    <div className="error-page">
      <div className="error-details">
        <div className="ufo-pic">
          <img
            src="/assets/images/drawing_ufo.png"
            alt="error page icon"
            className="ufo-pic"
          />
        </div>
        <div className="error-message">
          <h1 className="error-heading">404</h1>
          <p className="error-description">Oooops!</p>
          <p className="error-description">
            The page was <br />
            intercepted by UFO!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
