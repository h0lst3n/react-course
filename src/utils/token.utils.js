import { validationRequest } from './api.utils';

export const storeAccessToken = (data) => {
  const { token } = data;
  localStorage.setItem('accessToken', token);
};

export const checkIsTokenValid = () => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return validationRequest(token);
  } else {
    return Promise.resolve({
      isValid: false
    })
  }
};
