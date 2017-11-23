import React from 'react';
import { PropTypes } from 'prop-types';

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

CalendarSelectComponent.propTypes = {
  reload: PropTypes.func.isRequired,
  picked: PropTypes.func.isRequired,
};
