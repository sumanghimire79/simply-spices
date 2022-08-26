import React from 'react';
import { ProductPage } from './ProductPage.Container';

export default {
  title: 'Containers/ProductPage',
  component: ProductPage.component,
};

const Template = (args) => <ProductPage {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  product: {},
  saveToFavorites: 'save to favorites',
  onClose: () => {},
};
