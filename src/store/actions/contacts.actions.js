export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const APPLY_FILTER = 'APPLY_FILTER';

export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    name,
    number,
    id: Date.now()
  }
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: { id }
});

export const applyFilter = value => ({
  type: APPLY_FILTER,
  payload: {
    value
  }
});
