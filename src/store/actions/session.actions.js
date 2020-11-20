import { signUp } from '../../utils/api.utils';

export const DO_SIGNUP = 'DO_SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const doSignup = ({login, password}) => (dispatch, getState) => {
  signUp({login, password}).then(
    (data) => dispatch(loginSuccess(data))
  );
};

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  meta: {
    saveToken: true,
  },
  payload: {
    data
  }
});
