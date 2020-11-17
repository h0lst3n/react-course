import { apiCall } from '../../utils/api.utils';

const apiMiddleware = state => next => action => {
  if (!action.api) {
    return next(action);
  }
  const { token } = action;
  const {
    url,
    method,
    data,
    onSuccess,
    onSuccessCallback
  } = action.payload;

  const request = {
    url,
    method,
    data
  };

  if (token) {
    const accessToken = state.session.tokens.access;
    request.headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  apiCall(request).then(
    data => {
      if (onSuccess) {
        state.dispatch(onSuccess(data));
      }

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }
  )

};

export default apiMiddleware;
