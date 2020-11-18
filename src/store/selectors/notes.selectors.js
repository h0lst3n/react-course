import { createSelector } from 'reselect';

export const getAllNotes = state => state.notes.items;
export const getAllTags = state => state.notes.tags;
export const getSelectedTags = state => state.notes.selectedTags;

export const getNoteById = createSelector(
  [(state, id) => id, getAllNotes],
  (id, notes) => notes.find(note => note.objectID === id)
);

export const getNotesBySelectedTags = createSelector(
  [getAllNotes, getSelectedTags],
  (notes, tags) => notes.filter(
    note => tags.some(tag => note['_tags'].includes(tag))
  )
);

// export const getNoteById = (state, id) => {
//   const notes = getAllNotes(state);
//
//   return notes.find(note => note.objectID === id);
// };
//

// export const getNotesBySelectedTags = state => {
//   const notes = getAllNotes(state);
//   const tags = getSelectedTags(state);
//
//   return notes.filter(
//     note => tags.some(tag => note['_tags'].includes(tag))
//   );
// };

//component => action => middleware => reducer => state
// state => selector => component

// const memoize = fn => {
//   const cache = {};
//
//   return (...args) => {
//     const stringifiedArgs = JSON.stringify(args);
//
//     if (cache[stringifiedArgs]) {
//       return cache[stringifiedArgs];
//     }
//
//     cache[stringifiedArgs] = fn(...args);
//
//     return cache[stringifiedArgs];
//   }
// };
