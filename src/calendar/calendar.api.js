import { pipe, prop, pick, contains, __ } from 'ramda';

const canWrite = pipe(prop('accessRole'), contains(__, ['owner', 'writer']));

export const getCalendars = () => window.gapi.client.calendar.calendarList.list().then((result) => {
  if (result && result.status === 200) {
    return result.result.items
      .map(pick(['summary', 'id', 'accessRole']))
      .filter(canWrite);
  }
  return [];
});

export const createCalendar = (summary) => {
  if (!summary) {
    return false;
  }
  return window.gapi.client.calendar.calendars
    .insert({
      summary,
      timeZone: 'America/Toronto',
    })
    .then((result) => {
      if (result && result.status === 200) {
        return pick(['summary', 'id'], result.result);
      }
      return false;
    });
};
