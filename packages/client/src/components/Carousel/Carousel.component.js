import React, { useState } from 'react';
import './Carousel.styles.css';
import PropTypes from 'prop-types';
import { ProductCard } from '../ProductComponent/ProductCard.component';

export default function Carousel({ items, show }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < items.length - show) {
      setCurrentIndex(currentIndex + show);
    } else {
      setCurrentIndex(0);
    }
  };
  const prev = () => {
    if (currentIndex > 0 && currentIndex >= show) {
      setCurrentIndex(currentIndex - show);
    } else {
      setCurrentIndex(items.length - show);
    }
  };

  return (
    <div className="test">
      <div className="carousel-container">
        <button
          style={{ background: 'none', border: 'none' }}
          type="button"
          onClick={prev}
          className="left-arrow"
        >
          <img
            src="/assets/vectors/vector_carousel_left.svg"
            alt="left arrow"
          />
        </button>
        <div className="carousel-inner">
          <div className={`show-${show} carousel`}>
            {items.slice(currentIndex, currentIndex + show).map((item) => (
              <span className="carousel-content">
                <ProductCard
                  product={item}
                  variant="small"
                  className="product-container-small"
                />
              </span>
            ))}
          </div>
        </div>
        <button
          style={{ background: 'none', border: 'none' }}
          type="button"
          onClick={next}
          className="right-arrow"
        >
          <img
            src="/assets/vectors/vector_carousel_right.svg"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.node,
  show: PropTypes.number,
};

Carousel.defaultProps = {
  items: [],
  show: 1,
};
