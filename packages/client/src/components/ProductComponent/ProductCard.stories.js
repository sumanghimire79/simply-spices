import React from 'react';
import { ProductCard } from './ProductCard.component';

export default {
  title: 'components/Product',
  component: ProductCard.component,
};

const Template = (props) => (
  <>
    <ProductCard {...props} />
    <div style={{ display: 'flex', width: '100%' }}>
      <ProductCard {...props} variant="small" />
      <ProductCard {...props} variant="small" />
      <ProductCard {...props} variant="small" />
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 1,
    size: '250',
    price: 350,
    name: 'Testing long name',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '/assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  saveToFavorites: 'save to favorites',
  onClose: () => {},
  setError: () => {},
};
