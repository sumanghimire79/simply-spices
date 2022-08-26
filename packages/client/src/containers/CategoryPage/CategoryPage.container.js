import React, { useState, useEffect } from 'react';
import './CategoryPage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import { useParams } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { sortFunction } from '../../components/SortBy/Utils/sortFunction';

const CategoryPage = () => {
  const { name } = useParams();
  const [sort, setSort] = useState('');
  const textObj = {
    sidebar: `Simply Spices / Spices by plant part / ${name}`,
    main: `${name}`,
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProductsInCategory() {
      try {
        setLoading(true);
        const response = await fetch(`${getApiBaseUrl()}/api/category/${name}`);
        const productsJson = await response.json();
        setProducts(productsJson);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchProductsInCategory();
  }, [name]);

  const productItems = sortFunction(products, sort).map((product) => (
    <div className="category-items" key={product.name}>
      <ProductCard product={product} variant="small" />
    </div>
  ));
  return (
    <>
      <SortBy
        textObj={textObj}
        products={products}
        setProducts={setProducts}
        sort={sort}
        setSort={setSort}
      />

      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <div className="category-page-main-container">
          <div className="category-middle-main">
            {productItems}
            {error}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
