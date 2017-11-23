import { takeEvery, call, put } from 'redux-saga/effects';
import { CALENDAR, calendarActions } from './calendar.actions';
import { getCalendars } from './calendar.api';
import { AUTH } from '../auth';

export function* watchForCalendarList() {
  yield takeEvery(CALENDAR.LIST, loadCalendars);
}

export function* watchForAuthorizedAndLoadCalendars() {
  yield takeEvery(AUTH.AUTHORIZED, loadCalendersWhenAuthorized);
}

function* loadCalendersWhenAuthorized() {
  yield put(calendarActions.list());
}

function* loadCalendars() {
  try {
    const calendars = yield call(getCalendars);
    yield put(calendarActions.listSuccess(calendars));
  } catch (err) {
    console.log('calendar list failed', err);
    yield put(calendarActions.listFailed());
  }
}
