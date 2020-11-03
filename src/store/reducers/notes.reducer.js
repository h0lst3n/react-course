import { createReducer } from '@reduxjs/toolkit';
import { addNote, deleteNote } from '../actions/notes.actions';

const initialState = [];

export default createReducer(initialState, {
  [addNote]: (state, action) => [...state, action.payload],
  [deleteNote]: (state, action) => state.filter(note => note.id !== action.payload.id)
});

// export default createReducer(initialState, (builder) => {
//   builder
//     .addCase(addNote, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteNote, (state, action) => {
//       return state.filter(note => note.id !== action.payload.id)
//     })
// })

// import { ADD_NOTE, DELETE_NOTE } from '../actions/notes.actions';
//
// const initialState = [];
//
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NOTE:
//       return [...state, action.payload];
//     case DELETE_NOTE:
//       return state.filter(note => note.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
