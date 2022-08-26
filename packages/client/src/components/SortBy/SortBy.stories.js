import React from 'react';
import SortBy from './SortBy.component';

const textObj = {
  sidebar: 'Simply Spices / Spices by plant part / Berries and Fruit',
  main: 'Berries and Fruit',
};

export default {
  title: 'components/SortBy',
  component: SortBy,
};
const Sortby = (args) => <SortBy {...args} />;

export const Primary = Sortby.bind({});
Primary.args = {
  textObj,
};
