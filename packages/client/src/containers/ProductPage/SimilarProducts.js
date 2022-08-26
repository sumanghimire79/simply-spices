import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductPage.Style.css';
import Carousel from '../../components/Carousel/Carousel.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

export const SimilarProducts = ({ product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSimilarProducts() {
      try {
        const response = await fetch(
          `${getApiBaseUrl()}/api/products?category=${product.categoryId}`,
        );

        if (!response.ok) {
          throw new Error('something went wrong');
        }
        return await response.json();
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    async function getData() {
      await fetchSimilarProducts()
        .then((data) => {
          const similarItems = data.filter(
            (item) => item.name !== product.name,
          );
          setSimilarProducts(similarItems);
          setIsLoading(false);
        })
        .catch((err) => setError(err));
      setIsLoading(false);
    }
    getData();
  }, [product.categoryId, product.name]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  if (error) {
    return <p> {error} </p>;
  }
  return similarProducts.length > 0 ? (
    <>
      <h1 className="title-similar-products">Similar products:</h1>
      <Carousel items={similarProducts} show={3} className="carousel" />
    </>
  ) : (
    <div />
  );
};

SimilarProducts.propTypes = {
  product: PropTypes.shape({
    categoryId: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    categoryName: PropTypes.string,
  }),
};

SimilarProducts.defaultProps = {
  product: {},
};
