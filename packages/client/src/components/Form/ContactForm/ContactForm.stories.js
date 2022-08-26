import React from 'react';

import { ContactForm } from './ContactForm.component';

export default {
  title: 'components/Form/ContactForm',
  label: 'Contact Us',
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;

export const ContactFormStandard = Template.bind({});
ContactFormStandard.args = {
  text: 'SUBMIT',
  label: ' Contact-Form',

  handlePost: (name, email, message) =>
    // eslint-disable-next-line no-console
    console.log('i am clicked,', name, email, message),
};
