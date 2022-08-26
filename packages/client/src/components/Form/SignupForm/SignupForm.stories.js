import React from 'react';

import { SignupForm } from './SignupForm.component';

export default {
  title: 'components/Form/SignupForm',
  component: SignupForm,
};

const Template = (args) => <SignupForm {...args} />;

export const SignUpFormStandard = Template.bind({});
SignUpFormStandard.args = {
  text: 'SUBMIT',
  label: ' SignUp/Edit Form',

  handlePost: (name, email, message) =>
    // eslint-disable-next-line no-console
    console.log('props data summitted :', name, email, message),
};
