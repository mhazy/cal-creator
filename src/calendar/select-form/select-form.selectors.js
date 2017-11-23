import { createSelector, createStructuredSelector } from 'reselect';

import { prop } from 'ramda';

const selectCalendarState = prop('calendar');

const selectSelectedCalendar = createSelector(
  selectCalendarState,
  prop('selected'),
);

const selectCalendarList = createSelector(
  selectCalendarState,
  prop('calendars'),
);

const selectCalendarListOptions = createSelector(
  selectCalendarList,
  calendars =>
    calendars.map(calendar => ({ value: calendar.id, label: calendar.summary })),
);

const storeConnector = createStructuredSelector({
  options: selectCalendarListOptions,
  selected: selectSelectedCalendar,
});

export { storeConnector };
