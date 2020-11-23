import React from 'react';
import ShoppingCartContainer from './components/ShoppingCartContainer';

import ShoppingCart from './components/ShoppingCart';

const shoppingCartData = [{
  id: 'cart-id-1',
  name: 'Card item name 1',
  shippingStatus: "Free Shipping",
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 10.2,
  discount: 20
}, {
  id: 'cart-id-2',
  name: 'Card item name 2',
  shippingStatus: "Free Shipping",
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 8.2,
  discount: 10
}, {
  id: 'cart-id-3',
  name: 'Card item name 3',
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 25,
  discount: 30
}];

const App = (props) => {
  return (
    <div>
      <h2>React app</h2>
      <ShoppingCartContainer>
        {
          shoppingCartData.map((cart) => <ShoppingCart {...cart} key={cart.id}/>)
        }
      </ShoppingCartContainer>
    </div>
  );
};

export default App;
