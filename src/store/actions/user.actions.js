export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';


export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
  meta: {
    api: true
  },
  payload: {
    url: 'someUrl',
    method: 'GET',
    onSuccess: fetchUserDataSuccess
  }
});

export const fetchUserDataSuccess = (data) => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: {
    data
  }
});
