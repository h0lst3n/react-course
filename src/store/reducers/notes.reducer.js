import {ADD_NOTE, DELETE_NOTE} from '../actions/notes.actions';

export default (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
}
