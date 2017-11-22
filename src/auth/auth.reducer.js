import { AUTH } from "./auth.actions";

const INITIAL_STATE = {
  token: "",
  ready: false
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        token: ""
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
