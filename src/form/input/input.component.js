import React from 'react';

export const InputComponent = ({
  changed,
  id,
  name,
  placeholder,
  value,
}) => <input
  className="pa2 input-reset ba bg-white w-100"
  onChange={ changed }
  value={ value }
  placeholder={ placeholder }
  name={ name }
  id={ id } />;
