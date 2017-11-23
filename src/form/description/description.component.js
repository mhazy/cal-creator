import React from 'react';
import { PropTypes } from 'prop-types';

export const DescriptionComponent = ({ children }) => (
  <small className="f6 mb2 db i black-60">{children}</small>
);

DescriptionComponent.propTypes = {
  children: PropTypes.node,
};
