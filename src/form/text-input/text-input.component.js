import React from 'react';

export const TextInputComponent = ({
  changed,
  id,
  name,
  placeholder,
  value,
}) => (<input
  className="pa2 input-reset ba bg-white mb2 w-100"
  id={id}
  name={name}
  onChange={changed}
  placeholder={placeholder}
  type="text"
  value={value}
/>);
