import { createReducer } from '@reduxjs/toolkit';
import { addNote, deleteNote } from '../actions/notes.actions';

export default createReducer([], {
  [addNote]: (state, action) => {
    const { text, id } = action.payload;
       return [
         ...state,
         ...[{text, id}]
       ];
  },
  [deleteNote]: (state, action) => state.filter(note => note.id !== action.payload.id)
});

// import { ADD_NOTE, DELETE_NOTE } from '../actions/notes.actions';

// export default (state = [], action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       const { text, id } = action.payload;
//       return [
//         ...state,
//         ...[{text, id}]
//       ];
//     case DELETE_NOTE:
//       return state.filter(note => note.id !== action.payload.id);
//       default:
//         return state;
//   }
// }
//
