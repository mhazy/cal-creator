import { AUTH } from './auth.actions';

const INITIAL_STATE = {
  token: '1234',
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        token: '1234',
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
}
