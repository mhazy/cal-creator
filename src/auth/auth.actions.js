export const AUTH = {
  AUTHORIZE: "[Auth] Authorize",
  AUTHORIZED: "[Auth] Authorized",
  CLIENT_READY: "[Auth] Client Ready",
  INIT: "[Auth] Init",
  READY: "[Auth] Ready",
  LOGIN: "[Auth] Login",
  LOGOUT: "[Auth] Logout"
};

export const authActions = {
  authorized: payload => ({ type: AUTH.AUTHORIZED, payload }),
  authorize: () => ({ type: AUTH.AUTHORIZE }),
  initialize: () => ({ type: AUTH.INIT }),
  clientReady: () => ({ type: AUTH.CLIENT_READY }),
  ready: () => ({ type: AUTH.READY }),
  login: () => ({ type: AUTH.LOGIN }),
  logout: () => ({ type: AUTH.LOGOUT })
};
