import { ADD_NOTE, DELETE_NOTE } from '../actions/notes.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
};
