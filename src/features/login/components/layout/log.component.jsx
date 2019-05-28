import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './log.component.scss'
import {
  UIbutton,
  UIinput
} from '../../../../ui';

function LogComponent(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="fields">
        <UIinput name="username" value={props.username} label="Username" onChange={props.handleChange}></UIinput>
        <span className="space-between" />
        <UIinput name="password" type="password" value={props.password} label="Password" onChange={props.handleChange}></UIinput>
      </div>
      <UIbutton name="button" type="submit" variant="contained" color="primary" fullWidth={true}>Submit</UIbutton>

    </form>
  );
}

export {
  LogComponent
}
