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
      dni: '45454545',
      genre: 'female',
      roleUser: '2',
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
    this.createDriver = this.createDriver.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  createDriver() {
    const { dispatch } = this.props;
    dispatch(requestCreateDriver(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state', this.state)
    this.createDriver();

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
