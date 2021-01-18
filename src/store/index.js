import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { loggerMiddleware /*, thunk */, apiMiddleware } from './middlewares';

import /* @type Object - preloadedState */ initialState from './constants/initialState';

const middleware = compose(
  applyMiddleware(...[loggerMiddleware, apiMiddleware]),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const initializeStore = () => createStore(
  /* reducer, [preloadedState], [enhancer] */
  rootReducer,
  initialState,
  middleware
);
