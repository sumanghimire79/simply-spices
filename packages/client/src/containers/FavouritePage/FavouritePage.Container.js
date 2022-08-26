import React, { useState, useEffect } from 'react';
import './FavouritePage.Style.css';
import SortBy from '../../components/SortBy/SortBy.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import Preloader from '../../components/Preloader/Preloader.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { useParams } from 'react-router-dom';
import { sortFunction } from '../../components/SortBy/Utils/sortFunction';

const textObj = { sidebar: 'Simply Spices / Favourites', main: 'Favourites' };

export const FavouritePage = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [sort, setSort] = useState('');

  const { user_id: userId } = useParams();

  useEffect(() => {
    async function fetchFavourites() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${getApiBaseUrl()}/api/favorites/${userId}`,
        );
        const favoritesJson = await response.json();
        setFavourites(favoritesJson);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
    fetchFavourites();
  }, [userId]);

  const favouriteItems = sortFunction(favourites, sort).map((favourite) => (
    <ProductCard
      className="favourite-item"
      variant="small"
      product={favourite}
      isFavorite={isFavorite}
      setIsFavorite={setIsFavorite}
    />
  ));
  return (
    <>
      <SortBy textObj={textObj} sort={sort} setSort={setSort} />
      <div className="favourite-page-container">
        {loading && <Preloader />}
        <div className="favourite-page-container-main">{favouriteItems}</div>
      </div>
    </>
  );
};
