export const ADD_NOTE = 'ADD_NOTE';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const addNoteSuccess = text => ({
  type: ADD_NOTE,
  payload: {
    text
  }
});

export const fetchStart = () => ({
  type: FETCH_START
});

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error
});

const asycnActionCreator = args => dispatch => {
  dispatch(fetchStart);

  fetch('some_url')
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchFailure(error)));

};

export function addNote(text) {
  return (dispatch, getState) => {
    console.log('state', getState());
    setTimeout(() => {
      dispatch(addNoteSuccess(text))
    },
    1000
  );
  }
}
