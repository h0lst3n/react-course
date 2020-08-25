export const ADD_NOTE = 'ADD_NOTE';

export const addNote = text => ({
  type: ADD_NOTE,
  payload: {
    text
  }
});
