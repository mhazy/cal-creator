import { CALENDAR } from './calendar.actions';

const INITIAL_STATE = {
  name: '',
};

export const calendarReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CALENDAR.SET_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
