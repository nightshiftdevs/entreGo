import React from 'react';

import {
  UIbutton,
  UIinput,
  UItextarea,
} from '../../../../ui';

function FormComponent(props) {
  return (
    <form className="driver-form" onSubmit={props.handleSubmit}>
      <UIinput name="firstName" value={props.firstName} label="First Name" onChange={props.handleChange}></UIinput>
      <UIbutton name="button" type="submit" variant="contained" color="secondary">Submit</UIbutton>
    </form>
  );
}

export {
  FormComponent
}
