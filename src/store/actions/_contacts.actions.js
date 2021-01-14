import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('ADD_CONTACT', ({name, number}) => ({
  payload: {
    id: Date.now(),
    name,
    number
  }
}));

export const deleteContact = createAction('DELETE_CONTACT');

// export const ADD_CONTACT = 'ADD_CONTACT';
// export const DELETE_CONTACT = 'DELETE_CONTACT';

// export const addContact = ({name, number}) => ({
//   type: ADD_CONTACT,
//   payload: {
//     id: Date.now(),
//     name,
//     number
//   }
// });
//
// export const deleteContact = id => ({
//   type: DELETE_CONTACT,
//   payload: {
//     id
//   }
// });
