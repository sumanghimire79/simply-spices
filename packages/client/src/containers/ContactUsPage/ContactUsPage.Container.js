import React from 'react';
import './ContactUsPage.Style.css';
import { ContactForm } from '../../components/Form/ContactForm/ContactForm.component';

export const ContactUsPage = () => {
  return (
    <div className="contact-us-page-container">
      <ContactForm />
    </div>
  );
};
