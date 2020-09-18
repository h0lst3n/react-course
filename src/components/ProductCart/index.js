import React from 'react';
import PropTypes from 'prop-types';

const ProductCart = ({price, name, imgUrl}) => (
  <div>
    <img
     src={imgUrl}
     alt={name}
     width={520}
     />
     {/*name && <span>{name}</span>*/}
     {
       name
       ? <span>{name}</span>
       : <strong>NO NAME</strong>
     }
     <p>Price: {price}$</p>
     <button type='button'>Add to cart</button>
  </div>
);

ProductCart.defaultProps = {
  imgUrl: "https://i2.rozetka.ua/goods/15985848/hator_htc_912_images_15985848740.jpg"
};

ProductCart.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ProductCart;
