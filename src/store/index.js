import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import INITIAL_STATE from './constants/initialState';
import rootReducer from './reducers';

// import logger from './middlewares/logger.middleware';
// import {logger, thunk } from './middlewares';
import {logger } from './middlewares';

export default () => createStore(
  /* reducer(s), initialState, middleware */
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...[logger, thunk]/**, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()**/)
);
