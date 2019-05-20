import React, { Component } from 'react';

import { FormComponent } from '../'

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
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('state', this.state)
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

export {
  DriverFormContainer
}
