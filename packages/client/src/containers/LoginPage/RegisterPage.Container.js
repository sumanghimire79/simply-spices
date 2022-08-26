import React from 'react';
import './LoginRegisterPage.Styles.css';

import { RegisterForm } from '../../components/Form/Login/UserRegisterForm/RegisterForm.component';

export function RegisterPage() {
  return (
    <div className="registerpage-container">
      <RegisterForm />
    </div>
  );
}
