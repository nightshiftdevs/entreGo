import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './form.component.scss'
import {
  UIbutton,
  UIinput
} from '../../../../ui';

function FormComponent(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="fields">
        <div className="row">
          <UIinput name="firstName" value={props.firstName} label="First Name" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="lastName" value={props.lastName} label="Last Name" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="email" type="email" value={props.email} label="Email" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="cellphone" value={props.cellphone} label="Cellphone" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="birthDate" value={props.birthDate} label="Birth Date" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="address" value={props.address} label="Address" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="password" type="password" value={props.password} label="Password" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="password2" type="password" value={props.password2} label="Confirm Password" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="bankAccount" value={props.bankAccount} label="Insert your bank account" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row photo">
          <input className="upload-input"
            name="userPhoto"
            value={props.userPhoto}
            accept="image/*"
            id="contained-button-file-user"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file-user" className="upload-button">
            <UIbutton variant="contained" component="span" fullWidth={true}>
              Upload your photo &nbsp;
            <CloudUploadIcon />
            </UIbutton>
          </label>
        </div>

        <div className="row">
          <UIinput name="licensePlate" value={props.licensePlate} label="License Plate" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="cargoVolume" value={props.cargoVolume} label="Cargo Volumen" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row">
          <UIinput name="brand" value={props.brand} label="Vehicle brand" onChange={props.handleChange}></UIinput>
          <span className="space-between" />
          <UIinput name="color" value={props.password2} label="Vehicle color" onChange={props.handleChange}></UIinput>
        </div>
        <div className="row photo">
          <input className="upload-input"
            name="vehiclePhoto"
            value={props.vehiclePhoto}
            accept="image/*"
            id="contained-button-file-vehicle"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file-vehicle" className="upload-button">
            <UIbutton variant="contained" component="span" fullWidth={true}>
              Upload your vehicle photo &nbsp;
            <CloudUploadIcon />
            </UIbutton>
          </label>
        </div>

      </div>
      <UIbutton name="button" type="submit" variant="contained" color="primary" fullWidth={true}>Submit</UIbutton>

    </form>
  );
}

export {
  FormComponent
}
