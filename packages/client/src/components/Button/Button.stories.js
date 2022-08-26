// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button.component';

export default {
  title: 'components/Button',
  component: Button.component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  icon: '',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  icon: '',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  icon: '',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
  icon: '',
};
