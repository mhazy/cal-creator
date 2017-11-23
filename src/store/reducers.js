import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { calendarReducer } from '../calendar';

export const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
});
