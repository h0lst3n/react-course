import React from 'react';
import './App.scss';

import './global.module.scss';

import Layout from './Components/Layout';
import ProductCart from './Components/ProductCart';

const productsCollection = [
  {
    id: 'id-1',
    name: 'Product#1',
    price: 10,
    imgUrl: "https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
  },
  {
    id: 'id-2',
    name: 'Product#2',
    price: 13,
    imgUrl: "https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
  },
  {
    id: 'id-3',
    name: 'Product#3',
    price: 18,
    imgUrl: "https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
  }
];

const App = () => (
  <Layout>
    {productsCollection.map((product) => <ProductCart {...product} key={product.id}/>)}
  </Layout>
);

export default App;
