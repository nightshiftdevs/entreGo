import React from "react";
import Radio from '@material-ui/core/Radio';
import './radio.component.scss';

function UIradio(props) {
  const {
    className,
    name,
    id,
    value,
    onChange,
    type = 'radio'
  } = props;
  return (
    <input
      className={`ui-input-radio ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}

export {
  UIradio
}
