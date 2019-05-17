import React from "react";
import './select.component.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function UIselect(props) {
  const {
    className,
    name,
    id,
    value,
    onChange,
    options, /* [{key:'Peru', value='0'},{key:'Argentina', value='1'},] */
    placeholder
  } = props;
  return (
    <Select
      className={`ui-select ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      <MenuItem value="">{placeholder}</MenuItem>
      {options.map(option => {
        return (
          <MenuItem value={option.value}>
            {option.key}
          </MenuItem>
        );
      })}
    </Select>
  )
}

export {
  UIselect
}
