import { createReducer } from '@reduxjs/toolkit';
import { addNote, deleteNote } from '../actions/notes.actions';

export default createReducer([], {
  [addNote /* 'ADD_NOTE' */]: (state, action) => [...state, action.payload], //[addNote.type] === [addNote]
  [deleteNote /* 'DELETE_NOTE' */]: (state, action) => state.filter(({id}) => id !== action.payload.id)
});

// import { ADD_NOTE, DELETE_NOTE } from '../actions/notes.actions';
//
// const notesReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       return [...state, action.payload];
//     case DELETE_NOTE:
//       return state.filter(({id}) => id !== action.payload.id);
//     default:
//       return state;
//   }
// };
//
// export default notesReducer;
