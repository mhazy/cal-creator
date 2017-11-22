import React from 'react';

import { TextInputComponent, LabelComponent } from '../../form';

export const EventsFormComponent = ({
  name,
  changed,
}) => (
  <div>
    <div>
    <LabelComponent forInput={ 'calendar_name' }>Pattern</LabelComponent>
    <TextInputComponent changed={ changed } value={ name } name={ 'calendar_name' } id={ 'calendar_name ' } />
    </div>
  </div>
);
