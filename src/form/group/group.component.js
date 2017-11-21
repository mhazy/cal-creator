import React from 'react';
import { PropTypes } from 'prop-types';

export const GroupComponent = ({ children, title }) =>
  <fieldset className="">
    <legend>{ title }</legend>
    { children }
  </fieldset>;

GroupComponent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
