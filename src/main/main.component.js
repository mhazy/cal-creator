import React from 'react';
import { PropTypes } from 'prop-types';

import { AuthContainerComponent } from '../auth';
import { CalendarContainerComponent } from '../calendar';

export const MainComponent = ({ isAuthReady, isAuthorized }) => (
  <div className="measure center pt4">
    {isAuthReady ? (
      <div>
        <div className="mb2">
          <AuthContainerComponent />
        </div>
        {isAuthorized && <CalendarContainerComponent />}
      </div>
    ) : (
      <div className="tc">Loading dependencies...</div>
    )}
  </div>
);

MainComponent.propTypes = {
  isAuthorized: PropTypes.bool,
};
