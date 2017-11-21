import React from 'react';

import { InputComponent, LabelComponent } from '../../form';

export const CalendarFormComponent = ({
  name,
  changed,
}) => (
  <div>
    <LabelComponent forInput={ 'calendar_name' }>Calendar Name</LabelComponent>
    <InputComponent changed={ changed } value={ name } name={ 'calendar_name' } id={ 'calendar_name ' } />
  </div>
);
