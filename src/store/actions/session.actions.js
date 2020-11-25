import { signUp, login as loginCall } from '../../utils/api.utils';

export const DO_SIGNUP = 'DO_SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const doSignup = ({login, password}) => dispatch => {
  signUp({login, password}).then(
    (data) => dispatch(loginSuccess(data))
  );
};

export const doLogin = ({login, password}) => dispatch =>{
  loginCall({login, password}).then(
    (data) => dispatch(loginSuccess(data))
  );
}

export const doLogout = () => ({
  type: LOGOUT,
  meta: {
    token: {
      action: 'delete'
    }
  }
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  meta: {
    token: {
      action: 'save'
    }
  },
  payload: {
    data
  }
});
