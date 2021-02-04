import {
  SIGN_IN,
  LOGOUT
 } from '../actions/session.actions';

const initialState = {
  isLogedIn: false,
  user: {
    name: '',
    email: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        isLogedIn: true
      };
    }
    case LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
