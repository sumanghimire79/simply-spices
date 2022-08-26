import React from 'react';
import Carousel from './Carousel.component';

const items = [
  <img
    src="assets/images/spices_square/star_anise.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
  <img
    src="assets/images/spices_square/dried_rosemary.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
  <img
    src="assets/images/spices_square/cinnamon_sticks.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
  <img
    src="assets/images/spices_square/dried_saffron.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
  <img
    src="assets/images/spices_square/chilipepper_powder.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
  <img
    src="assets/images/spices_square/black_pepper_berries.jpeg"
    alt="star anise"
    style={{ width: '200px', height: '200px' }}
  />,
];

export default {
  title: 'Components/Carousel.component',
  component: Carousel.component,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items,
  show: 3,
};
