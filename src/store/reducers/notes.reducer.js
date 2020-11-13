import { ADD_NOTE, DELETE_NOTE, NOTES_FETCH_SUCCES } from '../actions/notes.actions';

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case NOTES_FETCH_SUCCES:
      return [...state, ...action.payload.data];
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter(({objectID: id}) => id !== action.payload.objectID);
    default:
      return state;
  }
};

export default notesReducer;
