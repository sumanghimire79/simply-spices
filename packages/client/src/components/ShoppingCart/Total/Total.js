import React from 'react';
import PropTypes from 'prop-types';

function Total({ title, price }) {
  return (
    <div className="shopping-cart-total">
      <h5 className="total-title">{title}:</h5>
      <h4 className="total-title">{price} DKK</h4>
    </div>
  );
}

Total.defaultProps = {
  title: '',
  price: null,
};

Total.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};

export default Total;
