import { combineReducers } from 'redux';
import sessionReducer from './session.reducer';
import postsReducer from './posts.reducer';

export default combineReducers({
  session: sessionReducer,
  posts: postsReducer
});
