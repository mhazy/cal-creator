import React from 'react';

import { GroupComponent, DescriptionComponent, InputComponent, LabelComponent } from '../../form';

export const CalendarFormComponent = ({
  name,
  changed,
}) => (
  <div>
    <GroupComponent title={ 'Create Calendar' }> 
      <LabelComponent forInput={ 'calendar_name' }>Calendar Name</LabelComponent>
      <InputComponent changed={ changed } value={ name } name={ 'calendar_name' } id={ 'calendar_name ' } placeholder={ 'Work' } />
      <DescriptionComponent>Enter a name for the calendar to create</DescriptionComponent>
    </GroupComponent>
  </div>
);
