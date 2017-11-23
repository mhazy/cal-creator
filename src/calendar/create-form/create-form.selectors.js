import { createSelector, createStructuredSelector } from "reselect";

import { prop } from "ramda";

const selectCalendarState = prop("calendar");

const selectCalendarName = createSelector(selectCalendarState, prop("name"));

const storeConnector = createStructuredSelector({
  name: selectCalendarName
});

export { selectCalendarName, storeConnector };
