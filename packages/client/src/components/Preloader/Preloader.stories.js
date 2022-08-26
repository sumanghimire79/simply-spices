import React, { useState } from 'react';
import Preloader from './Preloader.component';

export default {
  title: 'Example/Preloader',
  component: Preloader.component,
};

// 👇 We create a “template”
const Template = (args) => {
  const [loading, setLoading] = useState(false);
  return <Preloader {...args} loading={loading} setLoading={setLoading} />;
};

export const Primary = Template.bind({});
