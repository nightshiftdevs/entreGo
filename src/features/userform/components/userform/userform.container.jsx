import React, { Component } from 'react';
// To connect to our global store
import { connect } from 'react-redux';
import { requestCreateClient } from '../../store/actions'

import { FormComponent } from '..'
import userPlaceHolder from '../../../../assets/img/userplaceholder.png'

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      cellphone: '',
      email: '',
      password: '',
      password2: '',
      userPhoto: userPlaceHolder
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

  createClient(e) {
    const { dispatch } = this.props;
    dispatch(requestCreateClient(this.state));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createClient(e);
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

const UserFormContainer = connect()(UserContainer);

export {
  UserFormContainer
}
