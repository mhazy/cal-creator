import { takeEvery } from 'redux-saga/effects';
import { AUTH } from './auth.actions';

function* watchAuthActions() {
  yield takeEvery([AUTH.LOGIN, AUTH.LOGOUT], handleAuthLogin);
}

function handleAuthLogin(action) {
  console.log('SAGA', action);
}

export {
  watchAuthActions
}
