import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({
  imgSrc,
  name,
  price
}) => {
  return (
    <div>
      <img src={imgSrc} alt="" />
      {name && <h2>{name}</h2>}
      {
        price
          ? <p>Price: ${price}</p>
          : <p><strong>Please ask manager</strong></p>
      }
      <button type="button">Add to cart</button>
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
