import React, { useState, useEffect } from 'react';
import './LandingPage.Style.css';
import Pagination from '../../components/Pagination/Pagination';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import Preloader from '../../components/Preloader/Preloader.component';
import { LandingPageSlogan } from '../../components/LandingPageUpperSection/LandingPageSlogan';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductsList } from './ProductsList';
import { sortFunction } from '../../components/SortBy/Utils/sortFunction';

export const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('');
  const [numberOfPages] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `${getApiBaseUrl()}/api/products?pageIndex=${currentPage - 1}`,
      );

      if (!response.ok) {
        throw Error('something went wrong, please try again later');
      }

      const fetchedProducts = await response.json();

      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  // Text object for sortBy( BreadCrumb).
  const bradCrumb = {
    sidebar: 'Simply Spices / All Spices ',
    main: 'All Spices',
  };

  if (loading) return <Preloader />;
  return (
    <>
      {' '}
      <div className="landing-page-header">
        <LandingPageSlogan />
      </div>
      <SortBy textObj={bradCrumb} sort={sort} setSort={setSort} />
      <div id="listed-products">
        <ProductsList products={sortFunction(products, sort)} />
        <Pagination
          currentPage={currentPage}
          pageCount={numberOfPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};
