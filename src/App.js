import React from 'react';
import Layout from './components/Layout';
import ShoppingCard from './components/ShoppingCard';
import './App.scss';

const getShoppingCardData = () => ([{
  name: 'Card item name 1',
  shippingStatus: "Free Shipping",
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 10.2,
  discount: 20
}, {
  name: 'Card item name 2',
  shippingStatus: "Free Shipping",
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 8.2,
  discount: 10
}, {
  name: 'Card item name 3',
  imageSrc: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg",
  price: 25,
  discount: 30
}]);

const App = () => {
  const children = getShoppingCardData().map((card, index) => <ShoppingCard {...card} key={`shipping-card-${index}`}/>);
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default App;
