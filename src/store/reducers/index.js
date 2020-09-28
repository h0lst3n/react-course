import { combineReducers } from 'redux';

import notesReducer from './note.reducer';

export default combineReducers({
  notes: notesReducer
});
