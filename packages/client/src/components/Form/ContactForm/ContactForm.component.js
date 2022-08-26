import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';
import { Button } from '../../Button/Button.component';
import { useNavigate } from 'react-router-dom';

import getApiBaseUrl from '../../../utils/getApiBaseUrl';

const validationPatterns = {
  name: /^[a-zA-Z\s]+$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const errorMessage = {
  required: 'is required',
  name: 'Name can not include Number',
  email: 'Please enter a valid email address: example@domain.com',
  message: 'message is required',
};

export const ContactForm = ({ text, label, handlePost }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isAllInputFilledOut, setIsAllInputFilledOut] = useState(false);
  const [errorState, setErrorState] = useState([]);
  const [fetchStatus, setFetchStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value.trim() });
    setIsMessageSent(false);
  };

  useEffect(() => {
    if (formState.name && formState.email && formState.message) {
      setIsAllInputFilledOut(true);
    } else {
      setIsAllInputFilledOut(false);
    }
  }, [formState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = [];
    errors = Object.keys(formState).map((key) => {
      const error = {
        field: key,
        message: '',
      };
      if (!formState[key]) {
        error.message = `${[key]} ${errorMessage.required}`;
      } else if (
        Object.prototype.hasOwnProperty.call(validationPatterns, `${key}`)
      ) {
        if (!formState[key].match(validationPatterns[key])) {
          error.message = errorMessage[key];
        }
      }
      return error;
    });

    if (errors.filter((err) => err.message !== '').length === 0) {
      const inputObj = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      };

      (async () => {
        const postMessage = await fetch(`${getApiBaseUrl()}/api/messages`, {
          method: 'POST',
          headers: { 'Content-Type': 'Application/json' },
          body: JSON.stringify(inputObj),
        });

        if (postMessage.status === 200) {
          setIsMessageSent(true);
          navigate('/contact-us-feedback');
        }
        setFetchStatus({
          status: postMessage.status,
          message: postMessage.statusText,
        });
      })();

      setFormState({
        name: '',
        email: '',
        message: '',
      });
    }

    setErrorState(errors);
  };

  const errObj = {
    name: errorState
      .filter((error) => error.field === 'name')
      .map((error) => error.message),
    email: errorState
      .filter((error) => error.field === 'email')
      .map((error) => error.message),
    message: errorState
      .filter((error) => error.field === 'message')
      .map((error) => error.message),
  };

  return (
    <div className="contact-form-background">
      <div className="contact-form-container">
        <div className="contact-head ">
          <p className="contact-form-simply-spices-text"> Simply Spices</p>
          <img
            className="contact-form-vector_logo_underline"
            alt="simply spices text"
            src="assets/vectors/vector_logo_underline.svg"
          />
        </div>

        <div className="wrapper-outer-contact-form">
          <p>
            Your opinion and questions matter to us so feel free to contact our
            customer service for all general enquiries. We respond within
            maximum 2 working days.
          </p>
          <form id="contact-form">
            <div className="wrapper-contact-form">
              {isMessageSent ? (
                <span className="success-msg">Message Sent</span>
              ) : (
                ''
              )}
              {fetchStatus.message}
              {fetchStatus.status}

              <div className="form-row">
                <label htmlFor="name">
                  Name <span className="required-star">*</span>
                </label>

                <input
                  className={
                    errorState?.some(
                      (field) => field.field === 'name' && field.message,
                    )
                      ? 'contact-input-wrong'
                      : 'contact-input'
                  }
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  placeholder="type your name"
                  onChange={handleChange}
                  required
                />
              </div>
              <span className="contact-error-span"> {errObj.name}</span>

              <div className="form-row">
                <label htmlFor="email">
                  Email <span className="required-star">*</span>
                </label>

                <input
                  className={
                    errorState?.some(
                      (field) => field.field === 'email' && field.message,
                    )
                      ? 'contact-input-wrong'
                      : 'contact-input'
                  }
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  placeholder="type your email"
                  onChange={handleChange}
                  required
                />
              </div>
              <span className="contact-error-span"> {errObj.email}</span>

              <div className="form-row">
                <label htmlFor="textarea">
                  Your message <span className="required-star">*</span>
                </label>

                <textarea
                  className={
                    errorState?.some(
                      (field) => field.field === 'message' && field.message,
                    )
                      ? 'contact-input-wrong'
                      : 'contact-input'
                  }
                  id="textarea"
                  name="message"
                  value={formState.message}
                  placeholder="type your message"
                  onChange={handleChange}
                  maxLength="200"
                  required
                />
              </div>

              <span className="contact-error-span"> {errObj.message}</span>

              <div className="form-row">
                <Button
                  className={
                    isAllInputFilledOut ? 'ready-button' : 'normal-button'
                  }
                  size="medium"
                  label="SUBMIT"
                  icon=""
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </form>
          <p>
            Regarding all urgent matters you can also contact us on one of our
            phone numbers.
          </p>
          <p>
            Customer Service : + 45 11 22 33 11 <br /> Sales Representative: +45
            12 34 56 87
          </p>

          <p>
            <a
              className="email-link"
              href="tel:+4587654321"
              target="_blank"
              rel="noreferrer"
            >
              Press: +45 87 65 43 21
            </a>
            &nbsp; or
            <a
              className="email-link"
              href="https://www.hackyourfuture.dk/volunteer"
              target="_blank"
              rel="noreferrer"
            >
              press@simplyspices.dk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  handlePost: PropTypes.func,
};

ContactForm.defaultProps = {
  text: null,
  handlePost: () => {},
};
