import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './aside2.component.scss'
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

import { UserService, userUrls } from '../../api'
let userService = new UserService();

class AsideComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clientRate: '4.5',
      ready: false,
    }
  }

  componentDidMount() {
    let user = localStorage.getItem('username');
    userService.getUser(userUrls.clientDetails, { username: user }).then((res) => {
      this.setState({
        data: res.data.list
      });
      localStorage.setItem('clientDetails', JSON.stringify(res.data.list));    
    });
  }

  componentDidUpdate() {
    if (this.state.ready !== true) {
      this.setState({ ready: true });
      console.log('updated', this.state);
    }
  }

  render() {
    // @1.- To connect this component to logout action
    return (
      <aside className="aside">
        <h1 className="title-text">entreGo</h1>
        <div>
          <div className="personal-info">
            <img className="personal-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="personal-data">{this.state.ready ? `${this.state.data[0].fullname}` : 'UserName'}</p>
            <p className="personal-data star-rate">{this.state.clientRate}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
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

const Aside2 = connect(mapStateToProps, { logout })(AsideComponent)

export {
  Aside2
}
