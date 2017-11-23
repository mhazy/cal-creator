import React from 'react';
import { PropTypes } from 'prop-types';

export const GroupComponent = ({ children, title }) =>
  (<fieldset className="ph0 mh0 bn">
    <legend>{ title }</legend>
    { children }
   </fieldset>);

GroupComponent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
