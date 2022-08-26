import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { useState, useEffect, useCallback } from 'react';

export function useFavoriteService(productId) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState('');

  const userId = 1;

  useEffect(() => {
    fetch(`${getApiBaseUrl()}/api/favorites/1`)
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(data.isFavorite);
      });
  }, [productId]);

  const addAsFavorite = useCallback(async () => {
    const body = {
      userId,
      productId,
    };
    try {
      const response = await fetch(`${getApiBaseUrl()}/api/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Failed to add product as favorite');
      }
    } catch (err) {
      setError(err);
    }
  }, [productId]);

  const removeFromFavorite = useCallback(async () => {
    try {
      const response = await fetch(
        `${getApiBaseUrl()}/api/favorites/${productId}`,
        {
          method: 'DELETE',
        },
      );

      if (!response.ok) {
        throw new Error('Failed to remove product from favorites');
      }
    } catch (err) {
      setError(err);
    }
  }, [productId]);

  const updateFavoriteStatus = useCallback(
    (shouldBeFavorite) => {
      if (shouldBeFavorite) {
        addAsFavorite();
        setIsFavorite(true);
      } else {
        removeFromFavorite();
        setIsFavorite(false);
      }
    },
    [addAsFavorite, removeFromFavorite],
  );

  return {
    isFavorite,
    updateFavoriteStatus,
    error,
  };
}
