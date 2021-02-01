export const storeAccessToken = (data) => {
  const { token } = data;
  localStorage.setItem('accessToken', token);
};
