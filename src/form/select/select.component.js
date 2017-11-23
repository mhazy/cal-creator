import React from "react";

export const SelectComponent = ({
  changed,
  id,
  options,
  name,
  emptyLabel,
  emptyValue,
  value
}) => (
  <select
    id={id}
    name={name}
    onChange={event => changed(event.target.value)}
    value={value}
  >
    <option value={emptyValue}>{emptyLabel}</option>
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
