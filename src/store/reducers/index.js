import { combineReducers } from 'redux';
import notesReducer from './notes.reducer';
import sessionReducer from './session.reducer';
import useReducer from './user.reducer';

export default combineReducers({
  notes: notesReducer,
  session: sessionReducer,
  user: useReducer
});
