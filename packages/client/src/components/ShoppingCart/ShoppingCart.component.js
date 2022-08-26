import React, { useState, useEffect } from 'react';
import Total from './Total/Total';
import './ShoppingCart.styles.css';
import OrderProduct from './ProductComponent/OrderProduct.component';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('fp-cart-state'));
    if (savedNotes) {
      setProducts((prev) => [savedNotes]);
    }
  }, []);

  // eslint-disable-next-line no-console
  console.log(products);

  const addProductToCart = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return products;
      }),
    );
  };

  const removeProductFromCart = (productId) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: Math.max(0, product.quantity - 1),
          };
        }
        return products;
      }),
    );
  };

  const calculateTotal = () => {
    return products
      .map((product) => product.price * product.quantity)
      .reduce((a, b) => a + b, 0);
  };

  return (
    <div className="shopping-cart">
      <div>
        <div className="shopping-cart-container">
          <h1 className="shopping-cart-title">Shopping Cart</h1>
          <div className="shopping-cart-flex">
            <div>
              <p>Quantity</p>
              <p>Price</p>
              <p className="bold">Total DKK</p>
            </div>
          </div>
          {products?.map((product) => (
            <OrderProduct
              data={product}
              key={product.id}
              onAdd={() => {
                addProductToCart(product.id);
              }}
              onRemove={() => {
                removeProductFromCart(product.id);
              }}
            />
          ))}
          <div className="shopping-cart-total-btn">
            <Link to="/">
              <button type="button" className="order-product-btn btn">
                CONTINUE SHOPPING
              </button>{' '}
            </Link>
            <div>
              <Total title="Subtotal" price={calculateTotal()} />
              <Total title="Delivery" price="10.00" />
              <Total title="Total" price={calculateTotal() + 10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
