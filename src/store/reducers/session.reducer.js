import { LOGIN } from '../actions/session.actions';

const initialState = {
  isLogedIn: false,
  user: {
    name: '',
    email: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLogedIn: true
      };
    }
    default:
      return state;
  }
}
