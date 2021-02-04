export const request = (data) => {
  return Promise.resolve({
    name: 'name',
    surname: 'surname',
    token: 'asdasdasdasda.asdasdasda.qqqqwq1212'
  });
}

export const validationRequest = (token) => {
  return Promise.resolve({
    isValid: true
  });
}
