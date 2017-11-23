import { AUTH } from "./auth.actions";

const INITIAL_STATE = {
  authorized: false,
  token: null,
  ready: false
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH.AUTHORIZED:
      return {
        ...state,
        authorized: true,
        token: action.payload
      };
    case AUTH.AUTHORIZE:
      return {
        ...state,
        authorized: false,
        token: null
      };
    case AUTH.LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        authorized: false,
        token: null
      };
    case AUTH.READY:
      return {
        ...state,
        ready: true
      };
    default:
      return state;
  }
};
