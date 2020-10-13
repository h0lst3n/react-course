export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

//  saga example
// function* addNote() {
//   try {
//     data = yeild call(fetch, url);
//     yeild put(fetchSuccess, data);
//   } catch (error) {
//     yeild put(fetchFailure, error);
//   }
// }

export const addNote = args => dispatch => {
  fetchStart();

  fetch('https://hn.algolia.com/api/v1/search?query=react')
      .then(response => response.json())
      .then(data => dispatch(fetchSuccess(data)))
      .catch(error => dispatch(fetchFailure(error)));
};

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: { id }
});

const fetchStart = () => ({
  type: 'notes/FETCH_START'
});

const fetchFailure = error => ({
  type: 'notes/FETCH_FAILURE',
  payload: error
});

const fetchSuccess = data => ({
  type: 'notes/FETCH_SUCCESS',
  payload: data
});
