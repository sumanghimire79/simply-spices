import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Preloader.styles.css';

function Preloader({ loading, setLoading }) {
  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line
  }, [loading]);

  return (
    <div className="loader-main-contanier">
      {loading && (
        <div className="loader">
          {}
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
        </div>
      )}
    </div>
  );
}

export default Preloader;

Preloader.defaultProps = {
  loading: false,
  setLoading: () => {},
};
Preloader.propTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};
