import React from 'react';
import PropTypes from 'prop-types';

import styles from './shoppingCard.module.scss';

import {Button1, Button2, Button3} from '../common/Button';

const ShoppingCard = ({name, shippingStatus, imageSrc, price, discount, buttonLabel}) => {

  const priceWithDiscount = price - price / 100 * discount;
  return (
    <div className={`${styles.shoppingCard}`}>
      <span className="shipping-status">{shippingStatus}</span>
      <div className="card-image-container">
        <img src={imageSrc} alt=""/>
      </div>
      <div className="shopping-card-description">
        <h3>{name}</h3>
        <div className="price-container">
          <span className="original-price">$ {price.toFixed(2)}</span>
          <span className="price-discount">$ {priceWithDiscount}</span>
        </div>
      </div>
      <Button1 label={buttonLabel}/>
      <Button2 label='Button 2'/>
      <Button3 label='Button 3'/>
    </div>
  );
}

ShoppingCard.propTypes = {
  name: PropTypes.string.isRequired,
  shippingStatus: PropTypes.string,
  imageSrc: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  buttonLabel: PropTypes.string
};


ShoppingCard.defaultProps = {
  name: 'Default name',
  buttonLabel: 'Add to cart'
};

export default ShoppingCard;
