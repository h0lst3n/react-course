import { apiCall } from '../../utils/api.utils';

export const DO_LOGIN = 'DO_LOGIN';

export const signUp = (data) => dispatch => {
  //async API call;
  apiCall(data).then(
    data => dispatch(doLogin(data))
  );
}

const doLogin = tokens => ({
  type: DO_LOGIN,
  payload: tokens
});
