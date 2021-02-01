import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { loggerMiddleware, apiMiddleware } from './middlewares';

import initialState from './constants/initialState';

const getInitalState = () => {
  const defaultState = localStorage.getItem('appState');
  return defaultState
    ? {
      ...initialState,
      ...JSON.parse(defaultState)
    }
    : initialState;
};

const middleware = compose(
  applyMiddleware(...[loggerMiddleware, apiMiddleware]),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const initializeStore = () => createStore(
  /* reducer, [preloadedState], [enhancer] */
  rootReducer,
  getInitalState(),
  middleware
);
