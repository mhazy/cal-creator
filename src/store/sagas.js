import { all } from 'redux-saga/effects';

import { watchAuthActions } from '../auth/auth.sagas';

export function* rootSaga() {
  try {
    yield all([
      watchAuthActions(),
    ]);
  } catch (e) {
    console.log('This blew up!', e);
  }
}
