import React from 'react';
import '../ShoppingCart.styles.css';
import PropTypes from 'prop-types';

function OrderProduct({ data, onAdd, onRemove }) {
  // eslint-disable-next-line no-console
  console.log(data);

  const count = data.count ?? data.quantity;
  return (
    <div className="order-product">
      <div className="order-product-img">
        <img
          src="assets/images/spices_square/dried_juniper_berries.jpeg"
          alt="product"
        />
      </div>
      <div className="order-product-product-container">
        <h2 className="order-product-title">{data.name}</h2>
        <p>
          {' '}
          <span className="bold">packaging:</span> {data.size}g flatpack
        </p>
        <div className="shopping-cart-btns">
          <button type="button" className="order-product-btn">
            REMOVE ITEM
          </button>
        </div>
      </div>
      <div className="order-product-quantity">
        <div className="order-product-counter">
          <button type="button" onClick={onRemove}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={onAdd}>
            +
          </button>
        </div>
        <p className="order-product-price">{data.price} DKK</p>
        <p className="order-product-total bold">{data.price * count} DKK</p>
      </div>
    </div>
  );
}

OrderProduct.defaultProps = {
  data: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

OrderProduct.propTypes = {
  data: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};
export default OrderProduct;
