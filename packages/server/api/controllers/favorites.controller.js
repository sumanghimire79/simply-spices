const knex = require('../../config/db');

const postFavorites = async (body) => {
  const favorites = await knex('Favorites').insert(body);
  return favorites;
};

const getFavoritesById = async (id) => {
  const favorites = await knex('Favorites')
    .join('Users', 'Users.id', 'Favorites.userId')
    .join('Products', 'Products.id', 'Favorites.productId')
    .select('Products.id', 'userId', 'name', 'price', 'size', 'pictureUrl')
    .where({ userId: id });
  return favorites;
};

const getFavorites = async () => {
  const favorites = await knex('Favorites')
    .join('Users', 'Users.id', 'Favorites.userId')
    .join('Products', 'Products.id', 'Favorites.productId');
  return favorites;
};

const deleteFavoritesById = async (reqId, body) => {
  const favorites = await knex('Favorites')
    .where({ productId: reqId })
    .delete(body);
  return favorites;
};

module.exports = {
  deleteFavoritesById,
  postFavorites,
  getFavorites,
  getFavoritesById,
};
