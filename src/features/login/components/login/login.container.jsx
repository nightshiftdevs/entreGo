import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LogComponent } from '../'
import { requestLogin } from '../../middlewares/middlewares'

class LoginContainerr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
  
  requestLogin() {
    const { dispatch } = this.props;
    dispatch(requestLogin(1));
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state', this.state);
    this.requestLogin();
  }

  onMouseUp() {
    this.setState({
      log: [`onMouseUp`, ...this.state.log]
    })
  }

  render() {
    return (
      <React.Fragment>
        <LogComponent handleSubmit={(e) => { this.handleSubmit(e) }} handleChange={(e) => { this.handleChange(e) }} />
      </React.Fragment>
    )
  }
}

const LoginContainer = connect()(LoginContainerr)

export {
  LoginContainer
}
