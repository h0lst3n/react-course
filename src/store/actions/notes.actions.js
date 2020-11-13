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

export const fetchNotes = () => dispatch => {
  fetch('https://hn.algolia.com/api/v1/search?query=react')
    .then(response => response.json())
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => console.log(error));
};

// const asyncActionCreator = args => dispatch => {
//   callApi()
//     .then(data => {
//       dispatch({
//         type: NOTES_FETCH_SUCCES,
//         payload: {
//           data
//         }
//       })
//     })
//
// };

// const callApi = () =>  Promise.resolve({data: '12'});
