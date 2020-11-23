import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const a = document.createElement(tagName);
// a.setAttribute('attrName', 'attrValue');
// React.createElement(type, [props, children]);
//
//const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org',
//     target: '_blank',
//     rel: 'noreferrer noopener'
//   },
//   'test link'
// );

// const image = React.createElement(
//   'img',
//   {
//     src: 'https://images-na.ssl-images-amazon.com/images/I/311UE71HI0L.jpg'
//   }
// );
// const title = React.createElement('h2', null, 'Test chair item');
// const price = React.createElement('p', null, 'Price: $19.99');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');
// const cart = React.createElement('div', null, image, title, price, button);
//
// const cartWithChildrenInProps = React.createElement(
//   'div',
//   {
//     children: [image, title, price, button]
//   }
// );
//
// const linkWithJSX = (
//   <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">test link</a>
// );
//
// const imageLink = "https://images-na.ssl-images-amazon.com/images/I/311UE71HI0L.jpg";
//
// const cartWithJSX = (
//   <div>
//     <img src={imageLink} alt="" />
//     <h2>Test chair item</h2>
//     <p>Price: $19.99</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
//
// const postWithJSX = (
//   <>
//     <h2>Example post</h2>
//     <p>Example post text</p>
//   </>
// );
//
// const post = React.createElement(React.Fragment, null,
//   React.createElement('h2', null, 'Example post'),
//   React.createElement('p', null, 'Example post text')
// );


ReactDOM.render(
  <App propertyOne="propertyValue"/>,
  //linkWithJSX,
  //cart,
  // cartWithChildrenInProps,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
