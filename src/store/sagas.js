import { all } from "redux-saga/effects";

import {
  watchForAuthClientReady,
  watchForAuthClientInit,
  watchForGoogleClient
} from "../auth/auth.sagas";

export function* rootSaga() {
  try {
    yield all([
      watchForAuthClientReady(),
      watchForAuthClientInit(),
      watchForGoogleClient()
    ]);
  } catch (error) {
    console.error("Error occurred within sagas", error);
  }
}
