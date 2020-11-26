import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from '../common/StyledButton';

import css from './style.module.scss';

const ShoppingCart = ({
  imgSrc,
  name,
  price
}) => {
  return (
    <div className={css['item-list']}>
      <img src={imgSrc} alt="" />
      {name && <h2 className={css['item-label']}>{name}</h2>}
      {
        price
          ? <p>Price: ${price}</p>
          : <p><strong>Please ask manager</strong></p>
      }
      <StyledButton bgColor="red">Add to cart</StyledButton>
    </div>
  );
};

ShoppingCart.defaultProps = {
  imgSrc: "https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_PE735593_S5.JPG?f=s",
  name: "Default name"
};

ShoppingCart.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default ShoppingCart;
