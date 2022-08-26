import React, { useState, useEffect, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../Button/Button.component';
import './UserLogin.Styles.css';
import getApiBaseUrl from '../../../../utils/getApiBaseUrl';

export const LoginlogoutContext = createContext();
export const UserLoginForm = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAllInputProvided, setIsAllInputProvided] = useState(false);
  const [userFetched, setUserFetched] = useState([]);
  const [user, setUSer] = useState({ email: '', name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUSer({ ...user, [name]: value });
  };
  useEffect(() => {
    if (user.name && user.email) {
      setIsAllInputProvided(true);
    } else {
      setIsAllInputProvided(false);
    }
  }, [user]);
  const messageLog = {
    email: 'invalid email',
    name: 'invalid name',
  };
  //  for error message
  const renderErrorMessage = (errorargument) =>
    errorargument === messages.name && (
      <div className="error">{messages.message}</div>
    );

  const fetchItem = async () => {
    const data = await fetch(`${getApiBaseUrl()}/api/users`);
    const jsonData = await data.json();
    setUserFetched(jsonData);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Find user login info
    const userData = userFetched.find((userdb) => {
      return userdb.email === user.email;
    });

    localStorage.setItem('email', userData.value);

    // Compare user info
    if (userData) {
      if (userData.fullName !== user.name) {
        // Invalid name
        setMessages({ name: 'name', message: messageLog.name });
      } else {
        setIsSubmitted(true);

        const loggedUser = {
          name: userData.fullName,
          email: userData.email,
        };
        const loggedUserSerilized = JSON.stringify(loggedUser);
        localStorage.setItem('loggedUser', loggedUserSerilized);
      }
    } else {
      // email not found
      setMessages({ name: 'email', message: messageLog.email });
    }
  };

  const renderFormLogin = (
    <div className="userlogin-container">
      <div className="userlogin-wrapper">
        <div className="login-form-row">
          <label className="login-label " htmlFor="name">
            name
            <span className="login-required-star">*</span>
          </label>

          <input
            className="userlogin-input"
            type="text"
            name="name"
            value={user.name}
            placeholder="type your name"
            onChange={handleChange}
            required
          />
        </div>
        <p className="login-error-m"> {renderErrorMessage('name')}</p>

        <div className="login-form-row">
          <label className="login-label" htmlFor="email">
            email <span className="login-required-star">*</span>
          </label>

          <input
            className="userlogin-input"
            type="text"
            name="email"
            value={user.email}
            placeholder="type your email"
            onChange={handleChange}
            required
          />
        </div>

        <p className="login-error-m"> {renderErrorMessage('email')}</p>

        <div className="login-form-row">
          <div className="login-register-button-div">
            <Button
              className={
                isAllInputProvided
                  ? 'all-input-provided-button-login'
                  : 'all-input-notprovided-button-login'
              }
              size="medium"
              label="Login"
              icon=""
              onClick={handleLogin}
            />
            <Link to="/register">
              <Button
                className={
                  isAllInputProvided
                    ? 'all-input-notprovided-button-login'
                    : 'all-input-notprovided-button-login'
                }
                size="medium"
                label="Register"
                icon=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="submit-form-css">
      {isSubmitted ? (
        <div>
          <h1> Congratulation {}</h1>
          <h1> Login Success !</h1>
          <h3> Enjoy shopping</h3>

          {setTimeout(() => {
            navigate('/');
            window.location.reload(false);
          }, 3000)}
        </div>
      ) : (
        renderFormLogin
      )}
    </div>
  );
};
