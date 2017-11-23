import { all } from "redux-saga/effects";

import {
  watchForAuthClientReady,
  watchForAuthClientInit,
  watchForGoogleClient,
  watchForAuthorize
} from "../auth/auth.sagas";
import {
  watchForCalendarList,
  watchForAuthorizedAndLoadCalendars
} from "../calendar/calendar.sagas";
import { watchForCreateCalendar } from "../calendar/create-form";

export function* rootSaga() {
  try {
    yield all([
      watchForAuthClientReady(),
      watchForAuthClientInit(),
      watchForGoogleClient(),
      watchForAuthorize(),
      watchForCalendarList(),
      watchForAuthorizedAndLoadCalendars(),
      watchForCreateCalendar()
    ]);
  } catch (error) {
    console.error("Error occurred within sagas", error);
  }
}
