export const CALENDAR = {
  SET_NAME: '[Calendar] Set Name',
  CREATE: '[Calendar] Create'
};

export const calendarActions = {
  setName: name => ({ type: CALENDAR.SET_NAME, payload: name }),
  create: () => ({ type: CALENDAR.CREATE }),
};
