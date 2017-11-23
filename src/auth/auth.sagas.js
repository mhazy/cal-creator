import { takeEvery, call, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { AUTH, authActions } from "./auth.actions";
import { initialize, authorize, loadClient } from "./auth.api";

export function* watchForAuthClientReady() {
  yield takeEvery(AUTH.CLIENT_READY, handleClientReady);
}

export function* watchForAuthClientInit() {
  yield takeEvery(AUTH.INIT, handleInit);
}

export function* watchForAuthorize() {
  yield takeEvery(AUTH.AUTHORIZE, handleAuthorize);
}

export function* watchForGoogleClient() {
  while (true) {
    yield call(delay, 100);
    // Wait for gapi to be ready
    if (window.gapi && window.gapi.load) {
      yield put(authActions.clientReady());
      return;
    }
  }
}

function* handleClientReady() {
  try {
    yield call(loadClient);
    yield put(authActions.initialize());
  } catch (err) {
    console.error("Failed to load auth client", err);
  }
}

function* handleInit() {
  try {
    yield call(initialize);
    yield put(authActions.ready());
  } catch (err) {
    console.error("Failed to initialize Google auth", err);
  }
}

function* handleAuthorize() {
  try {
    const result = yield call(authorize);
    yield put(authActions.authorized(result));
  } catch (err) {
    console.error("Failed to authorize");
  }
}
