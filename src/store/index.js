import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './constants/initialState';
import rootReducer from './reducers';

import { loggerMiddleware, sessionMiddleware } from './middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [loggerMiddleware, sessionMiddleware, thunk];

const createStoreFunc = () =>
  createStore(/* reducer, [preloadedState], [enhancer] */
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

export default createStoreFunc;
