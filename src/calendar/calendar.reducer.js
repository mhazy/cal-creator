import { CALENDAR } from "./calendar.actions";
import { AUTH } from "../auth";

const INITIAL_STATE = {
  name: "",
  calendars: [],
  selected: "",
  picked: ""
};

export const calendarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CALENDAR.PICK:
      return {
        ...state,
        picked: state.selected
      };
    case CALENDAR.LIST_SUCCESS:
      return {
        ...state,
        selected: "",
        picked: "",
        calendars: action.payload
      };
    case CALENDAR.SELECT:
      return {
        ...state,
        picked: "",
        selected: action.payload
      };
    case CALENDAR.LIST:
    case CALENDAR.LIST_FAILED:
      return {
        ...state,
        name: "",
        selected: "",
        picked: "",
        calendars: []
      };
    case CALENDAR.SET_NAME:
      return {
        ...state,
        selected: "",
        picked: "",
        name: action.payload
      };
    case AUTH.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
