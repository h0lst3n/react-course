import {DO_LOGIN, DO_LOGOUT} from '../actions/session.actions';

const initialState = {
  user: {
    name: '',
    email: ''
  },
  isAuthenticated: false,
  token: {
    refresh: null,
    session: null,
    expiresIn: null
  }
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case DO_LOGIN:
      return {...state, isAuthenticated: true};
    case DO_LOGOUT:
      return {...state, isAuthenticated: false};
    default:
      return state;
  }
};
