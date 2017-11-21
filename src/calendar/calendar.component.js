import React from 'react';
import { CalendarFormComponent } from './form';

export const CalendarComponent = ({
  create,
  name,
  setName,
}) => (
  <div>
    <CalendarFormComponent name={ name } changed={ (event) => setName(event.target.value) } />
  </div>
);