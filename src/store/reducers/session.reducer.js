import { LOGIN_SUCCESS, LOGOUT } from '../actions/session.actions';

const initialState = {
  isAuthenticated: false,
  tokens: {
    access: null,
    refresh: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { access, refresh } = action.payload.data;
      return {
        isAuthenticated: true,
        tokens: {
          access,
          refresh
        }
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
