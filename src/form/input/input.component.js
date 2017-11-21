import React from 'react';

export const InputComponent = ({
  changed,
  id,
  name,
  value,
}) => <input
  className="pa2 input-reset ba bg-white w-100"
  onChange={ changed }
  value={ value }
  name={ name }
  id={ id } />;
