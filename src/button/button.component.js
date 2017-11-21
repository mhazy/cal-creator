import React from 'react';
import { PropTypes } from 'prop-types';

export const ButtonComponent = ({
  action,
  children
}) => <button className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" onClick={ action }>{ children }</button>;

ButtonComponent.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node,
};
