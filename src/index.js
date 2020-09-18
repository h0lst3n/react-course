import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* Using React.createElement */

// Create IMAGE element using React.createElement()
//
//React.createElement(type, props, children);
// const image = React.createElement('img', {
//   src: 'https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg',
//   alt: 'chair',
//   width: 520
// });
//
// Create IMAGE element using JSX
//
// const imageWithJSX = () => (
  // <img
  //  src="https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
  //  alt="chair"
  //  width={520}
  //  />
// );//
//
//
// const title = React.createElement('h3', null, 'Hator Chair');
// const price = React.createElement('p', null, 'Price: 12.99$');
// const button = React.createElement('button', {type: 'button'}, 'Add to cart');
//
// const product = React.createElement('div', null, image, title, price, button);
// === //
// const productWithChildrenInprops = React.createElement('div', {
//   children: [image, title, price, button]
// });
//
// ReactDOM.render(
//   //product,
//   productWithChildrenInprops,
//   document.getElementById('root')
// );
//

/* Using JSX(.jsx) */
const price = 12.99;

const product = (
  <div>
  <img
   src="https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
   alt="chair"
   width={520}
   />
   <h2>Hator Chair</h2>
   <p>Price: {price}$</p>
   <button type='button'>Add to cart</button>
  </div>
);

// const invalidProduct = (
//   <>
//     <img
//      src="https://i2.rozetka.ua/goods/15985843/hator_htc_912_images_15985843273.jpg"
//      alt="chair"
//      width={520}
//      />
//      <h2>Hator Chair</h2>
//      <p>Price: {price}$</p>
//      <button type='button'>Add to cart</button>
//    </>
// );


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
