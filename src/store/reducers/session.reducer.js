import { LOGIN_SUCCESS } from '../actions/session.actions';

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
    default:
      return state;
  }
}
