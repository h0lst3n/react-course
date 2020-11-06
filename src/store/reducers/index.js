import { combineReducers } from 'redux';
import notesReducer from './notes.reducer';

export default combineReducers({
  notes: notesReducer
});
