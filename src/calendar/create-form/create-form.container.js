import { connect } from "react-redux";

import { CreateFormComponent } from "./create-form.component";
import { storeConnector } from "./create-form.selectors";
import { calendarActions } from "../calendar.actions";

const actions = {
  changed: calendarActions.setName,
  create: calendarActions.create
};

export const CreateFormContainerComponent = connect(storeConnector, actions)(
  CreateFormComponent
);
