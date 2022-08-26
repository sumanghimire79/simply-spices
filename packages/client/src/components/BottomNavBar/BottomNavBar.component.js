import React, { useState } from 'react';
import './BottomNavBar.styles.css';
import BottomNavigation from './Right-bottom-navigation/BottomNavigation.component';
import { Link } from 'react-router-dom';

function BottomNavBar() {
  const [dropDownExpanded, setDropDownExpanded] = useState(false);
  const displayMode = dropDownExpanded ? 'display' : 'no-display';

  const displayContainer = !dropDownExpanded
    ? 'whole-container-push-element-down'
    : 'whole-container-not-push-element-down';
  const toggleIcon = () => {
    setDropDownExpanded(!dropDownExpanded);
  };

  const budFlower = () => {
    setDropDownExpanded(false);
  };
  const seed = () => {
    setDropDownExpanded(false);
  };
  const fruitBerry = () => {
    setDropDownExpanded(false);
  };
  const rootBark = () => {
    setDropDownExpanded(false);
  };
  const leaf = () => {
    setDropDownExpanded(false);
  };

  const showAll = () => {
    setDropDownExpanded(false);
  };

  return (
    <div className={displayContainer}>
      <div className="up-container">
        <div className="button-for-spices">
          <span className="spices-button">SPICES</span>
          {dropDownExpanded ? (
            <button
              className="toggle-button-bottom"
              type="button"
              onClick={toggleIcon}
            >
              <img
                src="/assets/vectors/vector_arrow_up.svg"
                alt="arrowup icon"
                className="arrow-bottom-bar"
              />
            </button>
          ) : (
            <button
              className="toggle-button-bottom"
              type="button"
              onClick={toggleIcon}
            >
              <img
                src="/assets/vectors/vector_arrow_down.svg"
                alt="arrow down icon"
                className="arrow-bottom-bar"
              />
            </button>
          )}
        </div>
        <BottomNavigation />
      </div>
      {/* this is the toggle part */}
      <div className={displayMode}>
        <div className="down-container">
          <div>
            <span className="main-heading">Browse spices by plant part</span>

            <div className="items-container">
              <div className="left-container">
                <div className="block-height">
                  <span className="spice-names">
                    <Link to="/category/bud">
                      <button type="button" onClick={budFlower}>
                        {' '}
                        BUD/FLOWER
                      </button>
                    </Link>
                  </span>
                  <p className="spices-menu-text">
                    (clove, caper, saffron and more)
                  </p>
                </div>

                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <Link to="/category/seed">
                      <button type="button" onClick={seed}>
                        SEED{' '}
                      </button>
                    </Link>
                  </span>
                  <p className="spices-menu-text">
                    (cummin, coriander,fennel, poppy and more)
                  </p>
                </div>
                <div className="block-height">
                  <span className="spice-names">
                    <Link to="/category/fruit">
                      {' '}
                      <button type="button" onClick={fruitBerry}>
                        FRUIT/BERRY{' '}
                      </button>
                    </Link>
                  </span>
                  <p className="spices-menu-text">
                    (chili, cardamon, black pepper and more)
                  </p>
                </div>
              </div>
              <div className="right-container">
                <div className="block-height">
                  <span className="spice-names">
                    <Link to="/category/root">
                      {' '}
                      <button type="button" onClick={rootBark}>
                        ROOT/RHIZOME/BARK{' '}
                      </button>{' '}
                    </Link>
                  </span>
                  <p className="spices-menu-text">
                    (turmeric, ginger, cinnamon and more)
                  </p>
                </div>

                <div className="block-height">
                  <span className="spice-names">
                    {' '}
                    <Link to="/category/leaf">
                      <button type="button" onClick={leaf}>
                        LEAF{' '}
                      </button>
                    </Link>
                  </span>
                  <p className="spices-menu-text">
                    (mint, oregano, thyme, bayleaf and more herbs)
                  </p>
                </div>
                <div className="show-all-spices  block-height">
                  <span className="spice-names">
                    <Link to="/">
                      <button type="button" onClick={showAll}>
                        SHOW ALL SPICES{' '}
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomNavBar;
