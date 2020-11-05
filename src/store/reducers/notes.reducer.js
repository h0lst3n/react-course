import { ADD_NOTE, DELETE_NOTE, NOTES_FETCH_SUCCESS } from '../actions/notes.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(note => note.objectID !== action.payload.objectID);
    case NOTES_FETCH_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
