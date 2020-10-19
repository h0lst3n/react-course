import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';

import createStore from './store';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
