import React from 'react';
import { Button } from '../Button/Button.component';
import './ProductCardModal.styles.css';
import PropTypes from 'prop-types';

export const ProductCardModal = ({
  onClose,
  productImage,
  productName,
  count,
  price,
  amountOfProducts,
}) => {
  return (
    <div className="modal-whole-container">
      <div className="modal-container">
        <div className="cancel-butt-container">
          <button
            type="button"
            onClick={() => onClose()}
            className="cancel-button"
          >
            X
          </button>
        </div>
        <div className="product-title">{productName}</div>
        <div className="product-image-modal">
          <img src={productImage} alt="product-img" />
          <div>ADDED TO CART </div>
          <div>
            There are
            <span className="count-item">{amountOfProducts}</span>
            items in your Cart.
            <br />
            <span>Card subtotal: {count * price} DKK </span>
          </div>
        </div>

        <div className="modal-footer">
          <span className="continue-shopping-button">
            <Button label="Continue Shopping" onClick={() => onClose(false)} />
          </span>
          <span>
            <Button label="View Cart" backgroundColor="green" color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};
ProductCardModal.propTypes = {
  onClose: PropTypes.func,
  productImage: PropTypes.string,
  productName: PropTypes.string,
  count: PropTypes.number,
  price: PropTypes.number,
  amountOfProducts: PropTypes.number,
};

ProductCardModal.defaultProps = {
  onClose: () => {},
  productImage: null,
  price: 350,
  productName: 'product name',
  count: 1,
  amountOfProducts: 0,
};
