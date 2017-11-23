import { createStructuredSelector, createSelector } from "reselect";
import { prop } from "ramda";

const selectCalendarState = prop("calendar");

const selectPickedCalendar = createSelector(
  selectCalendarState,
  prop("picked")
);

const storeConnector = createStructuredSelector({
  picked: selectPickedCalendar
});

export { storeConnector };
