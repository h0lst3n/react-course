export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_ERROR = 'NOTES_FETCH_ERROR';
export const RESET_NOTES = 'RESET_NOTES';

export const fetchNotes = url => dispatch => {
  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(() => dispatch(fetchFailure()));
}

const fetchSuccess = data => ({
  type: NOTES_FETCH_SUCCESS,
  payload: {
    data: data.hits
  }
});

const fetchFailure = () => ({
  type: NOTES_FETCH_ERROR ,
  payload: {
    error: 'Some error text'
  }
});

export const addNote = title => ({
  type: ADD_NOTE,
  payload: {
    objectID: Date.now(),
    title
  }
});

export const deleteNote = objectID => ({
  type: DELETE_NOTE,
  payload: {
    objectID
  }
});

export const resetNotes = () => ({
  type: RESET_NOTES
});
