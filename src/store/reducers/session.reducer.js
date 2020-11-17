import { DO_LOGIN, LOGOUT } from '../actions/auth.actions';

const initialState = {
  isAuthenticated: false,
  tokens: {
    refresh: null,
    access: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN:
      const { refreshToken: refresh, accessToken: access } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        tokens: {
          refresh,
          access
        }
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
