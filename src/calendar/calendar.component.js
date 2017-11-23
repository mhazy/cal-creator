import React from 'react';
import { CreateFormContainerComponent } from './create-form';
import { SelectFormContainerComponent } from './select-form';

export const CalendarSelectComponent = ({ reload, picked }) => (
  <div>
    {!picked && (
      <div>
        <CreateFormContainerComponent />
        <p>OR</p>
        <SelectFormContainerComponent />
        <button onClick={reload}>Reload</button>
      </div>
    )}
  </div>
);
