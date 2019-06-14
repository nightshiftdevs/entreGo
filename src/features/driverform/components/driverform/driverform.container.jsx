import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormComponent } from '../'
import { requestCreateDriver } from '../../store/actions'

class DriverFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //driver information
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
      birthDate: '',
      address: '',
      password: '',
      password2: '',
      dni: '',
      bankAccount: '', // need to validate this information
      userPhoto: '', // after test need to send information like a real photo
      // vehicle information
      licensePlate: '', // need to validate this information
      cargoVolume: '',
      brand: '',
      color: '',
      vehiclePhoto: '', // after test need to be generated automatically with brand & color information
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createDriver = this.createDriver.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  createDriver(e) {
    const { dispatch } = this.props;
    const fd = new FormData(e.target);
    dispatch(requestCreateDriver(fd));
  }

  handleSubmit(e) {
    
    e.preventDefault();
    this.createDriver(e);
  }

  onMouseUp() {
    this.setState({
      log: [`onMouseUp`, ...this.state.log]
    })
  }

  render() {
    return (
      <React.Fragment>
        <FormComponent handleSubmit={(e) => { this.handleSubmit(e) }} handleChange={(e) => { this.handleChange(e) }} />
      </React.Fragment>
    )
  }
}

const CreateDriver = connect()(DriverFormContainer)

export {
  CreateDriver
}
