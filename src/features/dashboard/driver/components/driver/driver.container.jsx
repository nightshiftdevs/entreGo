import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../../login/store/actions'

import './driver.container.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import cargoTruck4 from '../../../../../assets/img/cargoTruck4.jpg'
import { driver } from '../../../../../helpers/urls';

class DriverDashboardContainer extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    /*  const authLinks = (
       <button onClick={this.props.logout}>
         Logout
       </button>
     );
 
     const guestLinks = (
       <Fragment>
         {<Link to="/login">Login</Link>}
       </Fragment>
 
       {isAuthenticated ? authLinks : guestLinks} // esto va en el div render
     ); */

    return (
      <div className="driver-dashboard">
        <Link to={driver.order1} className="driver-start-btn">
          <FontAwesomeIcon icon={faTruck} />
          &nbsp; S T A R T &nbsp; N O W
        </Link>
        <div className="gradient-img-driver">
          <span className="gradient" />
          <img className="driver-img-0" src={cargoTruck4} alt="Cargo truck" />
        </div>
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
