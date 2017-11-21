export const AUTH = {
  LOGIN: '[AUTH] Login',
  LOGOUT: '[AUTH] Logout'
};

export const authActions = {
  login: () => ({ type: AUTH.LOGIN }),
  logout: () => ({ type: AUTH.LOGOUT }),
}
