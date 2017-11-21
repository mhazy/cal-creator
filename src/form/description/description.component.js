import React from 'react';
import { PropTypes } from 'prop-types';

export const DescriptionComponent = ({ children }) =>
  <span className="mb1 db fw3 i lh-copy f6">{ children }</span>;

DescriptionComponent.propTypes = {
  children: PropTypes.node
};
