import { combineReducers } from 'redux';
import notesReducer from './notes.reducer';
import sessionReducer from './session.reducer';

export default combineReducers({
  notes: notesReducer,
  session: sessionReducer
});
