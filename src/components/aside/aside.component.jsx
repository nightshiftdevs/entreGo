import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './aside.component.scss'
import userPlaceHolder from '../../assets/img/userplaceholder.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

// @1.-To connect this component to logout action and global state store
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../features/login/store/actions';

class AsideComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      driverRate: '4.5',
      updated: false,
    }
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate() {
    if (this.state.updated !== true) {
      this.setState({
        updated: true
      })
      console.log('updated',this.props.data[0].fullname);
    }
  }
  render() {
    // @1.- To connect this component to logout action
    console.log('render aside');
    return (
      <aside className="aside">
        <h1 className="title-text">entreGo</h1>
        <div>
          <div className="personal-info">
            <img className="personal-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="personal-data">{this.state.updated ? `${this.props.data[0].fullname}` : 'UserName'}</p>
            <p className="personal-data star-rate">{this.state.driverRate}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
          </div>
          <nav>
            <ul className="settings">
              <li> <Link to="" className="btn-settings">O R D E R</Link></li>
              <li> <Link to="" className="btn-settings">H I S T O R Y</Link></li>
              <li> <Link to="" className="btn-settings">H E L P</Link></li>
              <li> <Link to="" className="btn-settings">S E T T I N G S</Link></li>
            </ul>
          </nav>
        </div>
        <Link to='/' onClick={this.props.logout} className="btn-logout"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;LOGOUT</Link>      </aside>
    );
  }
}

AsideComponent.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

const Aside = connect(mapStateToProps, { logout })(AsideComponent)

export {
  Aside
}
