import React from 'react';
import './LoginRegisterPage.Styles.css';

import { UserLoginForm } from '../../components/Form/Login/UserLoginForm/UserLoginForm';
// import { SigninFormFirebase } from '../../components/Form/Login/LoginFormFirebase/SigninForm.Component';

export function LoginPage() {
  return (
    <div className="loginpage-container">
      <UserLoginForm />
      {/* <SigninFormFirebase /> */}
    </div>
  );
}
