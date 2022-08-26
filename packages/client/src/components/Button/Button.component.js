import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

export const Button = ({
  backgroundColor,
  label,
  icon,
  size,
  primary,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button-primary'
    : 'storybook-button-secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button-${size}`, mode].join(
        ' ',
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      {icon !== '' && <img className="button-icon" src={icon} alt="" />}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  // it works as below if react component
  icon: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  primary: false,
  size: 'medium',
  icon: '/assets/vectors/vector_cart.svg',
};
