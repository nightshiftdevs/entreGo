import React from "react";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './input.component.scss';

function UIinput(props) {
  const {
    className,
    name,
    id,
    type,
    label,
    defaultValue,
    placeholder,
    value,
    onChange,
    margin = "normal"
  } = props;
  return (
    <TextField
      className={`ui-input ${className}`}
      name={name}
      id={id}
      type={type}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      margin={margin}
    />
  )
}

export {
  UIinput
}
