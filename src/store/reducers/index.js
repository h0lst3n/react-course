import { combineReducers } from 'redux';
import sessionReducer from './session.reducer';

export default combineReducers({session: sessionReducer});
