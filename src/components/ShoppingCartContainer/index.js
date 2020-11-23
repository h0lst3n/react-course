import React from 'react';


const ShoppingCardContainer = (props) => {
  return (
    <div>
      <h1>
      Shopping cart container
      </h1>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default ShoppingCardContainer;
