import { connect } from "react-redux";

import { CalendarSelectComponent } from "./calendar.component";
import { storeConnector } from "./calendar.selectors";
import { calendarActions } from "./calendar.actions";

const actions = {
  setName: calendarActions.setName,
  create: calendarActions.create
};

export const CalendarContainerComponent = connect(storeConnector, actions)(
  CalendarSelectComponent
);
