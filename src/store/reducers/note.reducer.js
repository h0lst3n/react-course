import { ADD_NOTE, DELETE_NOTE } from '../actions/notes.actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      const { text, id } = action.payload;
      return [
        ...state,
        ...[{text, id}]
      ];
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.payload.id);
      default:
        return state;
  }
}
