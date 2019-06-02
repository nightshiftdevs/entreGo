import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../login/store/actions'


class DriverDashboardLayout extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <button onClick={this.props.logout}>
        Logout
      </button>
    );
    
    const guestLinks = (
      <Link to="/login">Login</Link>
    );

    return (
      <div>
        <h1>Hola driver</h1>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    )
  }
}

DriverDashboardLayout.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const DriverDashboard = connect(mapStateToProps, { logout })(DriverDashboardLayout)

export {
  DriverDashboard
};
