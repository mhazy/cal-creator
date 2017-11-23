import { takeEvery, take, call, race, put, select } from "redux-saga/effects";
import { CALENDAR, calendarActions } from "../calendar.actions";
import { selectCalendarName } from "./create-form.selectors";
import { createCalendar } from "../calendar.api";

export function* watchForCreateCalendar() {
  yield takeEvery(CALENDAR.CREATE, createNewCalendar);
}

function* createNewCalendar() {
  try {
    const name = yield select(selectCalendarName);
    const newCalendar = yield call(createCalendar, name);
    if (newCalendar !== false) {
      yield put(calendarActions.list());

      const result = yield race({
        success: take(CALENDAR.LIST_SUCCESS),
        failed: take(CALENDAR.LIST_FAILED)
      });

      if (result.success) {
        yield put(calendarActions.select(newCalendar.id));
      }
    }
  } catch (error) {
    console.error("Failed to create calendar", error);
  }
}
