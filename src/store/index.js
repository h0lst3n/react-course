import { createStore } from 'redux';

import INITIAL_STATE from './constants/initialState';
import rootReducer from './reducers';

export default () => createStore(
  /* reducer(s), initialState, middleware */
  rootReducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
