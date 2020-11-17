import { apiCall } from '../../utils/api.utils';

export const DO_LOGIN = 'DO_LOGIN';
export const LOGOUT = 'LOGOUT';

export const signUp = (data) => dispatch => {
  //async API call;
  apiCall(data).then(
    data => dispatch(loginSuccess(data))
  );
}

const loginSuccess = tokens => ({
  type: DO_LOGIN,
  payload: tokens
});

const logout = ({
  type: LOGOUT
});

export const doLogout = (onLogout) => dispatch => {
  dispatch(logout);
  dispatch(onLogout());
};

// export const doLogin = ({login, password}) => dispatch => {
//   apiCall({login, password}).then(
//     data => dispatch(loginSuccess(data))
//   );
// };

export const doLogin = ({login, password}, onSuccessCallback) => ({
  api: true,
  token: false,
  payload: {
    url: 'url',
    method: 'GET',
    data: {
      login,
      password
    },
    onSuccess: loginSuccess,
    onSuccessCallback
  }
});
