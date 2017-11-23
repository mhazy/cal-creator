import { connect } from 'react-redux';

import { SelectFormComponent } from './select-form.component';
import { storeConnector } from './select-form.selectors';
import { calendarActions } from '../calendar.actions';

const actions = {
  select: calendarActions.select,
  pick: calendarActions.pick,
};

export const SelectFormContainerComponent = connect(storeConnector, actions)(SelectFormComponent);
