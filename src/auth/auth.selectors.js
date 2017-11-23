import { createSelector, createStructuredSelector } from 'reselect';
import { prop } from 'ramda';

const selectAuthState = prop('auth');

const selectAuthToken = createSelector(selectAuthState, prop('token'));

const selectIsAuthorized = createSelector(selectAuthState, prop('authorized'));

const selectIsAuthReady = createSelector(selectAuthState, prop('ready'));

const storeConnector = createStructuredSelector({
  isAuthorized: selectIsAuthorized,
});

export {
  selectAuthToken,
  selectIsAuthorized,
  selectIsAuthReady,
  storeConnector,
};
