import { storeAccessToken } from '../../utils/token.utils';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = userData => ({
  type: LOGIN,
  payload: {
    data: userData
  }
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
