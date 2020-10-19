import {push} from 'react-router-redux';

export const DO_LOGIN = 'DO_LOGIN';
export const DO_LOGOUT = 'DO_LOGOUT';
export const LOGIN = 'LOGIN';

export const doLogin = () => {
  return dispatch => {
    dispatch({
      type: DO_LOGIN
    });
    return Promise.resolve();
  }
};

export const doLogout = () => ({
  type: DO_LOGOUT
});

export const someApiAction = () =>({
  meta: {
    REST: true,
    path: '/'
  },
  payload: {},
  onSuccess:
});

export const onRequestSuccess = payload => ({
  type: 'REQUEST_SUCCESS',
  payload
})
