import React from 'react';

import './order.component.scss'
import {
  UIbutton,
  UIinput,
  UItextarea
} from '../../../../../ui';

function OrderComponent(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="fields">
        <div className="row">
          <UIinput name="destinationAdress" type="destinationAdress" value={props.destinationAdress} label="Destination adress" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="cargoVolume" type="cargoVolume" value={props.cargoVolume} label="Package Volume on m3" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UItextarea name="obs" type="obs" value={props.obs} label="Product observations" onChange={props.handleChange}></UItextarea>
        </div>
      </div>
      <UIbutton className="register-component-btn" name="button" type="submit" variant="contained" color="primary" fullWidth={true}>E N C A R G O</UIbutton>
    </form>
  );
}

export {
  OrderComponent
}
