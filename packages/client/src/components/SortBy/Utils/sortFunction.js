export const sortFunction = (products, sort) => {
  return [...products].sort((a, b) => {
    if (sort === '') {
      return 0;
    }
    if (sort === 'alphabetically') {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    }
    if (sort === 'Lowest price') {
      return Number(a.price) > Number(b.price) ? 1 : -1;
    }
    if (sort === 'New arrivals') {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
    return 0;
  });
};
