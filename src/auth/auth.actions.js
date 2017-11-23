export const AUTH = {
  AUTHORIZE: "[AUTH] Authorize",
  AUTHORIZED: "[AUTH] Authorized",
  CLIENT_READY: "[AUTH] Client Ready",
  INIT: "[AUTH] Init",
  READY: "[AUTH] Ready",
  LOGIN: "[AUTH] Login",
  LOGOUT: "[AUTH] Logout"
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
