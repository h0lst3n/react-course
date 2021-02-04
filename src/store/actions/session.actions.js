import { storeAccessToken } from '../../utils/token.utils';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGN_IN = 'DO_LOGIN';

export const login = userData => ({
  type: LOGIN,
  meta: {
    api: true,
    url: '/login'
  },
  payload: {
    data: userData,
    onSuccess: signIn,
    onSuccessCallback: storeAccessToken
  },
});

export const register = ({email, password}) => ({
  type: REGISTER,
  meta: {
    api: true,
    url: '/register'
  },
  payload: {
    data: {
      login: login,
      password
    },
    onSuccessCallback: storeAccessToken,
    onSuccess: login
  }
});

export const logout = () => ({
  type: LOGOUT
});

export const signIn = () => ({
  type: SIGN_IN
})
