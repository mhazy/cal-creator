import { takeEvery, take, call, put } from "redux-saga/effects";
import { delay, eventChannel, END } from "redux-saga";
import { AUTH, authActions } from "./auth.actions";

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
    if (window.gapi && window.gapi.load) {
      yield put(authActions.clientReady());
      return;
    }
  }
}

function loadClient() {
  return eventChannel(emit => {
    window.gapi.load("client:auth2", () => {
      emit(true);
      emit(END);
    });

    return () => {};
  });
}

function initializeAuth() {
  return eventChannel(emit => {
    window.gapi.client
      .init({
        apiKey: "AIzaSyDzYoLaiFT5ubmjNc7Hri3k616NdgwKCuc",
        clientId:
          "198424686452-ij9cjpoasv6bem4udsam8e1lgc284t2v.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/calendar",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
        ]
      })
      .then(() => {
        emit(true);
        emit(END);
      })
      .catch(err => {
        emit(err);
        emit(END);
      });

    return () => {};
  });
}

function* handleClientReady() {
  const chan = yield call(loadClient);
  while (true) {
    yield take(chan);
    yield put(authActions.initialize());
    return;
  }
}

function* handleInit() {
  const chan = yield call(initializeAuth);
  while (true) {
    const initialized = yield take(chan);
    if (initialized === true) {
      yield put(authActions.ready());
    }
  }
}

function authorize() {
  return eventChannel(emit => {
    const auth = window.gapi.auth2.getAuthInstance();

    auth
      .signIn()
      .then(result => result.getAuthResponse())
      .then(result => {
        emit(result);
        emit(END);
      })
      .catch(err => {
        emit(false);
        emit(END);
      });

    return () => {};
  });
}

function* handleAuthorize() {
  const chan = yield call(authorize);
  while (true) {
    const authorizedResult = yield take(chan);
    if (authorizedResult !== false) {
      yield put(authActions.authorized(authorizedResult));
    }
    return;
  }
}
