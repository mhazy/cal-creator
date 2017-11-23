export const CALENDAR = {
  LIST: "[Calendar] List",
  LIST_FAILED: "[Calendar] List Failed",
  LIST_SUCCESS: "[Calendar] List Success",
  SET_NAME: "[Calendar] Set Name",
  SELECT: "[Calendar] Select",
  PICK: "[Calendar] Pick",
  CREATE: "[Calendar] Create"
};

export const calendarActions = {
  list: () => ({ type: CALENDAR.LIST }),
  listSuccess: payload => ({ type: CALENDAR.LIST_SUCCESS, payload }),
  listFailed: () => ({ type: CALENDAR.LIST_FAILED }),
  setName: payload => ({ type: CALENDAR.SET_NAME, payload }),
  select: payload => ({ type: CALENDAR.SELECT, payload }),
  pick: () => ({ type: CALENDAR.PICK }),
  create: () => ({ type: CALENDAR.CREATE })
};
