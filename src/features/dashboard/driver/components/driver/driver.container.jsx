import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../login/store/actions'
import { OrderContainer } from '../order/order.container'

import './driver.container.scss'

class DriverDashboardContainer extends Component {
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
        {isAuthenticated ? authLinks : guestLinks}
        <OrderContainer />
      </div>
    )
  }
}

DriverDashboardContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const DriverDashboard = connect(mapStateToProps, { logout })(DriverDashboardContainer)

export {
  DriverDashboard
};
