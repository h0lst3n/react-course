import { FETCH_USER_DATA_SUCCESS } from '../actions/user.actions';

export default (state = {} , action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
}
