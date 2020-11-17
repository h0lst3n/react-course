import {
  ADD_NOTE,
  DELETE_NOTE,
  NOTES_FETCH_SUCCESS,
  RESET_NOTES
} from '../actions/notes.actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(note => note.objectID !== action.payload.objectID);
    case RESET_NOTES:
      return initialState;
    case NOTES_FETCH_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
