import {
  SIGN_IN,
  SIGN_OUT
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
      const { user } = action.payload;
      return {
        user,
        isLogedIn: true
      };
    }
    case SIGN_OUT: {
      return initialState;
    }
    default:
      return state;
  }
}
