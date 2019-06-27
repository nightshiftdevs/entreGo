import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './aside.component.scss'
import userPlaceHolder from '../../assets/img/userplaceholder.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

class Aside extends Component {

  constructor(props) {
    super(props);
    this.state = {
      driverRate: '4.5',
    }
  }
  render() {
    return (
      <aside className="aside">
        <h1 className="title-text">entreGo</h1>

        <div>
          <div className="personal-info">
            <img className="personal-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="personal-data">A really really long name</p>
            <p className="personal-data star-rate">{this.state.driverRate}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
          </div>
          <nav>
            <ul className="settings">
              <li> <Link className="btn-settings">O R D E R</Link></li>
              <li> <Link className="btn-settings">H I S T O R Y</Link></li>
              <li> <Link className="btn-settings">H E L P</Link></li>
              <li> <Link className="btn-settings">S E T T I N G S</Link></li>
            </ul>
          </nav>
        </div>

        <Link className="btn-logout"><FontAwesomeIcon icon={faSignOutAlt} />&nbsp;LOGOUT</Link>
      </aside>
    );
  }
}

export {
  Aside
}
