import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import INITIAL_STATE from './constants/initialState';
import { initialMiddleware /*, thunkMiddleware */} from './middlewares';
import rootReducer from './reducers';

const middleware = [
  initialMiddleware,
  /*thunkMiddleware,*/
  thunk
];

export default () => createStore(/* reducers, [initialState], [echancers] */
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(...middleware)
);
