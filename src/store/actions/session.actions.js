import { storeAccessToken, clearToken, getToken } from '../../utils/token.utils';
import { request } from '../../utils/api.utils';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_IN';

export const register = ({name, email, password}) => dispatch => {
  request({method: 'post', url: 'users/signup', data: { name, email, password}})
    .then(response => {
      const {user, token} = response.data;
      storeAccessToken(token);
      dispatch(signIn(user));
    }).catch(error => {
      console.error(error);
    });
};

export const login = ({login: email, password}) => dispatch => {
  request({method: 'post', url: 'users/login', data: { email, password} })
    .then(response => {
      const { user, token } = response.data;
      storeAccessToken(token);
      dispatch(signIn(user));
    }).catch(error => {
      console.error(error);
    });
};

export const getTokenDetails = () => dispatch => {
  if (getToken()) {
    request({ url: 'users/current', authorized: true }).then(
      response => {
        const { email, name } = response.data;
        dispatch(signIn({ email, name }));
      }
    ).catch(() => {
      dispatch(signOut());
    })
  }
};

export const logout = () => dispatch => {
  request({method: 'post', url: 'users/logout', authorized: true})
    .then(() => {
      dispatch(signOut());
    });
};

export const signOut = () => {
  clearToken();
  return {
    type: SIGN_OUT
  }
};

export const signIn = user => ({
  type: SIGN_IN,
  payload: { user }
})
