import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// To connect the login action with our component
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions'

import { LogComponent } from '../'

// test
import {Alerts} from '../../../../components'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
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
    console.log('state', this.state);
    this.props.login(this.state.username, this.state.password);
  }

  onMouseUp() {
    this.setState({
      log: [`onMouseUp`, ...this.state.log]
    })
  }

  render() {
    if(this.props.isAuthenticated){
      return <Redirect to="/dashboard/driver" />;
    }
    return (
      <React.Fragment>
        <LogComponent handleSubmit={(e) => { this.handleSubmit(e) }} handleChange={(e) => { this.handleChange(e) }} />
        <Alerts />
      </React.Fragment>
    )
  }
}

LoginContainer.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

const Login = connect(mapStateToProps, { login })(LoginContainer)

export {
  Login
}

