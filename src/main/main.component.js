import React from 'react';
import { PropTypes } from 'prop-types';

import { AuthContainerComponent } from '../auth';
import { CalendarContainerComponent } from '../calendar';

export const MainComponent = ({
  isAuthorized,
}) => (
  <div className="measure center pt4">
    <div className="mb2">
      <AuthContainerComponent />
    </div>
    {
      isAuthorized && <CalendarContainerComponent />
    }
  </div>
);

MainComponent.propTypes = {
  isAuthorized: PropTypes.bool
};
