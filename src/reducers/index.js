import {combineReducers} from 'redux';

import sessionReducer from './session.reducer';
import userReducer from './posts.reducer';

export default combineReducers({
  session: sessionReducer,
  posts: userReducer
});
