import { createSelector, createStructuredSelector } from 'reselect';
import { complement, isEmpty, prop } from 'ramda';

const selectAuthState = prop('auth');

const selectAuthToken = createSelector(
  selectAuthState,
  prop('token'),
);

const selectIsAuthorized = createSelector(
  selectAuthToken,
  complement(isEmpty),
);

const storeConnector = createStructuredSelector({
  isAuthorized: selectIsAuthorized,
});

export {
  selectIsAuthorized,
  storeConnector,
};
