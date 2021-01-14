import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const { number, name } = action.payload;
      state.push({
        id: Date.now(),
        name,
        number
      });
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
