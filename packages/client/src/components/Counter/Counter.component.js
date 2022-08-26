import { React } from 'react';
import './Counter.styles.css';
import PropTypes from 'prop-types';

// count and setCound are props from the container component; the parent component
function Counter({ count, setCount }) {
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <span
        role="button"
        tabIndex={0}
        onClick={decrement}
        onKeyUp={decrement}
        className="decrement-quantity-button"
      >
        {' '}
        -
      </span>

      <span className="quantity-button">{count}</span>
      <span
        role="button"
        tabIndex={-1}
        onClick={increment}
        onKeyUp={increment}
        className="increment-quantity-button"
      >
        +
      </span>
    </div>
  );
}

Counter.defaultProps = {
  count: 1,
  setCount: () => {},
};

Counter.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default Counter;
