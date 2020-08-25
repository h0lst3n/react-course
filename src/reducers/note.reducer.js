import {ADD_NOTE} from '../actions/notes.actions';

export default (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        action.payload.text
      ];
      default:
        return state;
  }
}
