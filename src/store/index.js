import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import INITIAL_STATE from './constants/initialState';
import { initialMiddleware /*, thunkMiddleware */} from './middlewares';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
  initialMiddleware,
  /*thunkMiddleware,*/
  thunk
];

export default () => createStore(/* reducers, [initialState], [echancers] */
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middleware))
);
