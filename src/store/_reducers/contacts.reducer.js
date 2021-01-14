import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const { number, id, name } = action.payload;
      state.push({number, id, name});
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        ({id: contactId}) => contactId === action.payload
      );
      state.splice(index, 1);
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// import { createReducer } from '@reduxjs/toolkit';
//
// import { addContact, deleteContact } from '../actions/contacts.actions';
//
// const initialState = [];
//
// export default createReducer(initialState, {
//   [addContact]: (state, action) => {
//     const { number, id, name } = action.payload;
//     return [...state, {number, id, name}];
//   },
//   [deleteContact]: (state, action) => {
//     const id = action.payload;
//     return state.filter(({ id: contactId }) => contactId !== id);
//   }
// });

// export default createReducer(initialState, (builder) => builder
//   .addCase(addContact, (state, action) => {
//     const { number, id, name } = action.payload;
//     state.push({number, id, name});
//   })
//   .addCase(deleteContact, (state, action) => {
//     const index = state.findIndex(
//       ({id: contactId}) => contactId === action.payload
//     );
//     state.splice(index, 1);
//   })
//   // .addCase(/* action, actionHandlerFunction*/)
// );

// export default (/* previous state */ state = initialState, action) =>  {
//   switch (action.type) {
//     case addContact.type: {
//       const { number, id, name } = action.payload;
//       return [...state, {number, id, name}];
//     }
//     case deleteContact.type: {
//       const id = action.payload;
//       return state.filter(({ id: contactId }) => contactId !== id);
//     }
//     default:
//       return state;
//   }
// };

// export default (/* previous state */ state = initialState, action) =>  {
//   switch (action.type) {
//     case ADD_CONTACT: {
//       const { number, id, name } = action.payload;
//       return [...state, {number, id, name}];
//     }
//     case DELETE_CONTACT: {
//       const id = action.payload;
//       return state.filter(({ id: contactId }) => contactId !== id);
//     }
//     default:
//       return state;
//   }
// };

// import { ADD_CONTACT, DELETE_CONTACT } from '../actions/contacts.actions';
