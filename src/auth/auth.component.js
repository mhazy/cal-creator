import React from 'react';
import { PropTypes } from 'prop-types';

import { ButtonComponent } from '../button';

export const AuthComponent = ({ login, logout, isAuthorized }) => (
  <div>
    {isAuthorized ? (
      <ButtonComponent action={logout}>Logout</ButtonComponent>
    ) : (
      <ButtonComponent action={login}>Authorize with Google</ButtonComponent>
    )}
  </div>
);

AuthComponent.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};
