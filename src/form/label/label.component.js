import React from 'react';

export const LabelComponent = ({ children, forInput }) =>
  <label className="db fw6 lh-copy f6" for={ forInput }>{ children }</label>;
