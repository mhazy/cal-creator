import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonComponent } from '../button';

export const AuthComponent = ({
  login,
  logout,
  isAuthorized,
}) => (
  <div>
    {
      isAuthorized
      ? <ButtonComponent action={ logout }>Logout</ButtonComponent>
      : <ButtonComponent action={ login }>Authorize with Google</ButtonComponent>
    }
  </div>
);

AuthComponent.propTypes = {
  doLogin: PropTypes.func,
  doLogout: PropTypes.func,
  isAuthorized: PropTypes.bool.isRequired
};
