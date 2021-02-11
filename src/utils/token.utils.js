export const storeAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

export const clearToken = () => {
  localStorage.clear();
};

export const getToken = () => localStorage.getItem('accessToken');
