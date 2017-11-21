import { selectIsAuthorized } from '../auth';
import { createStructuredSelector } from 'reselect';

export const storeConnector = createStructuredSelector({
  isAuthorized: selectIsAuthorized,
});
