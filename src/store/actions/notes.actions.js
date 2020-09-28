export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = text => ({
  type: ADD_NOTE,
  payload: {
    id: Date.now(),
    text
  }
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: {
    id
  }
});
