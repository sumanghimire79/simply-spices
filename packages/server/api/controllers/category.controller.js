const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategories = async () => {
  return knex('Categories').select();
};

const getProducts = async (category, query) => {
  let productByCategory = knex('Categories')
    .join('Products', 'Categories.id', 'Products.categoryId')
    .where('Categories.name', 'like', `${category}%`);

  if (query.sort === 'name') {
    productByCategory = productByCategory.orderBy('Products.name', 'asc');
  }

  if (query.sort === 'lowestPrice') {
    productByCategory = productByCategory.orderBy('Products.size', 'asc');
  }
  if (query.sort === 'newest') {
    productByCategory = productByCategory.orderBy('Products.createdAt', 'asc');
  }
  return productByCategory;
};

const getProductByCategory = async (category, query) => {
  const products = await getProducts(category, query);
  if (products.length === 0) {
    throw new HttpError('No product under this category', 404);
  }
  return products;
};

module.exports = {
  getProductByCategory,
  getCategories,
};
