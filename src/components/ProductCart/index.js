import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
// css module
import styles from './style.module.scss';
import { Button } from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => createStyles({
  button: {
    backgroundColor: 'green',
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'yellow'
    }
  }
}));

//  CSS-IN-JS
// import styles from './style.module.scss';
// const AddButton = styled.button`
//   font-size: 15px;
//   font-weight: bold;
//   padding: 10px;
//   color: blue;
// `;

const ProductCart = ({price, name, imgUrl}) => {
  const classes = useStyle();
  return (
    <div className={styles["layout-container"]}>
      <img
       src={imgUrl}
       alt={name}
       width={520}
       />
       {/*name && <span>{name}</span>*/}
       {
         name
         ? <span className={"global-class"}>{name}</span>
         : <strong>NO NAME</strong>
       }
       <p>Price: {price}$</p>

       <Button color="default" variant="contained" className={classes.button}>Add to cart</Button>
    </div>
  );
}

ProductCart.defaultProps = {
  imgUrl: "https://i2.rozetka.ua/goods/15985848/hator_htc_912_images_15985848740.jpg"
};

ProductCart.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number
};

export default ProductCart;
