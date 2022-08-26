import React from 'react';
import PropTypes from 'prop-types';
import '../../components/Pagination/ProductLists.css';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

export const ProductsList = ({ products }) => {
  return (
    <ul className="product-lists">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} variant="small" />
        </li>
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf,
};
ProductsList.defaultProps = {
  products: [],
};
