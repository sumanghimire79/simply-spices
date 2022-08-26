import './DeliveryDetails.styles.css';
import React, { useState, useEffect } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

const DeliveryDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch(`${getApiBaseUrl()}/api/orders`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json[0]);
      });
  };

  return (
    <div>
      <div className="contact-outlayer">
        <h1 className="contact-header-text">Contact and Delivary Details</h1>

        <div className="contact" key={data.id}>
          <div className="contact-items">
            <div>
              <span className="name">name:</span>{' '}
              <span className="result">{data.fullName}</span>
            </div>
            <div>
              <span className="email">email:</span>
              <span className="result">{data.email}</span>
            </div>
            <div>
              <span className="city">city:</span>
              <span className="result">{data.city}</span>
            </div>
            <div>
              <span className="delivery">delivery adress:</span>
              <span className="result">{data.address}</span>
            </div>
            <div>
              <button type="button" className="edit-btn">
                Edit Details
              </button>
            </div>
          </div>
        </div>
        <div className="extra-btns">
          <div>
            <button type="button" className="review-btn">
              REVIEW ORDER
            </button>
          </div>
          <div>
            <button type="button" className="shopping-btn">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryDetails;
