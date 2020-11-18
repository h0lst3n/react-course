// const actionExample = {
//   type: 'TYPE_VALUE',
//   payload: {
//     /* required data */
//   }
// };
//

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTES_FETCH_SUCCES =  'NOTES_FETCH_SUCCES';
export const SELECT_TAG = 'SELECT_TAG';
export const UNSELECT_TAG = 'UNSELECT_TAG';

export const addNote = text => ({
  type: ADD_NOTE,
  payload: {
    objectID: Date.now(),
    title: text
  }
});

export const deleteNote = objectID => ({
  type: DELETE_NOTE,
  payload: {
    objectID
  }
});

const fetchSuccess = data => ({
  type: NOTES_FETCH_SUCCES,
  payload: {
    data: data.hits
  }
});

export const selectTag = tag => ({
  type: SELECT_TAG,
  payload: {
    tag
  }
});

export const unselectTag = tag => ({
  type: UNSELECT_TAG,
  payload: {
    tag
  }
});

export const fetchNotes = () => dispatch => {
  fetch('https://hn.algolia.com/api/v1/search?query=react')
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => console.log(error));
};
