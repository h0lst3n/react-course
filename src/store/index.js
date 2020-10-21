import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import INITIAL_STATE from './constants/initialState';
import rootReducer from './reducers';

const middleware = [thunk];

export default () => createStore(
  /* reducer(s), initialState, middleware */
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
);
