import { fetchUserData } from '../../utils/api.utils';

const apiMiddleware = ({dispatch}) => next => action => {
  if (!action.meta || !action.meta.api) {
    return next(action);
  }

  const  { url, method, data = {}, onSuccess } = action.payload;
  const request = {
    url,
    method,
    data,
    headers: {
      'Authentication': `Bearer ${localStorage.getItem('access')}`,
      'Content-type': 'application/json'
    }
  };

  next(action);

  fetchUserData(request).then(
    response => {
      if (onSuccess) {
        dispatch(onSuccess(response));

        delete action.meta.api;
      }
    }
  )
}

export default apiMiddleware;
