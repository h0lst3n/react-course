import React from 'react';

import css from './style.module.scss';

// import './style.scss';

// const itemsListStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   padding: '10px'
// };
//

const ShoppingCardContainer = (props) => {
  return (
    <div>
      <h1>
        Shopping cart container
      </h1>
      <div className={css['item-list']}>
      {/*<div className="item-list">*/}
      {/*<div style={itemsListStyles}>*/}
        {props.children}
      </div>
    </div>
  );
};

export default ShoppingCardContainer;
