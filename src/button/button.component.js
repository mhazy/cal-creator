import React from 'react';
import { PropTypes } from 'prop-types';

const noop = () => {};
export const ButtonComponent = ({ action = noop, children, disabled }) => (
  <button
    className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib"
    onClick={action}
    disabled={disabled}
  >
    {children}
  </button>
);

ButtonComponent.defaultProps = {
  children: '',
  disabled: false,
};

ButtonComponent.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
