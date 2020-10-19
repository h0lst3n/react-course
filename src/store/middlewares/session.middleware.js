import { LOGIN } from '../actions/session.actions';
import { push } from 'react-router-redux';

const sessionMiddleware = state => next => action => {
  console.log('action', action);
  if (action.type === LOGIN) {
    return push('/dashboard');
  }
  return next(action);
};

export default sessionMiddleware;
