import React from "react";
import TextField from '@material-ui/core/TextField';
import './textarea.component.scss';

function UItextarea(props) {
  const {
    className,
    name,
    id,
    label,
    value,
    onChange,
    rowsMax = '4'
  } = props;
  return (
    <TextField
      className={`ui-textarea ${className}`}
      name={name}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      multiline
      rowsMax={rowsMax}
    >
    </TextField>
  )
}

export {
  UItextarea
}
