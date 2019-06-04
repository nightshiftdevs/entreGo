import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../login/store/actions'
import {MapLayout} from '../../../../../components';

class DriverDashboardLayout extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <button onClick={this.props.logout}>
        Logout
      </button>
    );
    
    const guestLinks = (
      <Fragment>
        <Link to="/login">Login</Link>
      </Fragment>
      
    );

    return (
      <div>
        <h1>Hola driver</h1>
        {isAuthenticated ? authLinks : guestLinks}
        <MapLayout />
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
