import React, { useState } from 'react';
import { Button } from '../../../Button/Button.component';
import './SigninForm.Styles.css';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../../../../firebase.config';

export function SigninFormFirebase() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [retypeRegisterPassword, setRetypeRegisterPassword] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      if (retypeRegisterPassword !== registerPassword) {
        setMessage('password not matched');
      } else {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword,
        );
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="login-component">
      {user?.email && (
        <span className="logged-status">
          you are Logged in as: <br />
          {user?.email}
        </span>
      )}

      {/* register */}
      <div className="register">
        <input
          // type="email"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <span className="logged-status"> {message}</span>
        <input
          type="password"
          placeholder="Retype Password..."
          onChange={(event) => {
            setRetypeRegisterPassword(event.target.value);
          }}
        />

        <Button size="medium" label="CREATE USER" icon="" onClick={register} />
      </div>
      {/* login */}
      <div className="login">
        <input
          // type="email"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          // type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <Button size="medium" label="LOG IN" icon="" onClick={login} />
      </div>
      {/* logout */}
      <div className="logout">
        <Button size="medium" label="LOG OUT" icon="" onClick={logout} />
      </div>
    </div>
  );
}
