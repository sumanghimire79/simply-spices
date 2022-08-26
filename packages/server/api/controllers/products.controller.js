const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (
  sortOrder = '',
  pageIndex = 0,
  nameFilter = '',
  categoryFilter = '',
) => {
  let products = knex('Products')
    .join('Categories', 'Products.categoryId', 'Categories.id')
    .select(
      'Products.name',
      'Products.price',
      'Products.size',
      'Products.pictureUrl',
      'Products.id',
      'Products.categoryId',
      'Categories.name as categoryName',
    );

  if (sortOrder === 'name') {
    products = products.orderBy('name', 'asc');
  }
  if (sortOrder === 'lowestPrice') {
    products = products.orderBy('lowestPrice', 'desc');
  }
  if (sortOrder === 'newest') {
    products = products.orderBy('newest', 'asc');
  }
  if (nameFilter) {
    products = products.where('name', 'like', `%${nameFilter}%`);
  }
  if (categoryFilter) {
    products = products.where('Products.categoryId', '=', categoryFilter);
  }
  const PAGE_SIZE = 10;
  return products.limit(PAGE_SIZE).offset(pageIndex * PAGE_SIZE);
};

const getAllProducts = async (query) => {
  if ('name' in query) {
    const nameReg = /^[A-Za-z]*$/;
    if (!nameReg.test(query.name)) {
      throw new HttpError('the data entery is incorrect', 400);
    }
  }
  if ('category' in query) {
    if (!Number(query.category)) {
      throw new HttpError('category input should be a number', 400);
    }
  }
  return getProducts(
    query.sortOrder,
    query.pageIndex,
    query.name,
    query.category,
  );
};

const getProductsByid = async (id) => {
  if (!Number(id)) {
    throw new HttpError('ID input should be a number', 400);
  }

  const productsByid = knex('Products')
    .join('Categories', 'Products.categoryId', 'Categories.id')
    .select('Products.*', 'Categories.name as categoryName')
    .where('Products.id', '=', id);
  if (productsByid.length === 0) {
    throw new HttpError(`${id} is not found`, 404);
  }
  return productsByid;
};

module.exports = {
  getAllProducts,
  getProductsByid,
};
