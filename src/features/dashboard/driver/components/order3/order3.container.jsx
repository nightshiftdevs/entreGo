import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order3.container.scss'
import { driver } from '../../../../../helpers/urls';
import cargoTruck from '../../../../../assets/img/cargoTruck.jpg'

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faFileUpload
} from '@fortawesome/free-solid-svg-icons';

class Order3Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.signAgreement = this.signAgreement.bind(this);
  }

  componentDidMount() {
    let currentOrder = JSON.parse(localStorage.getItem('current'));
    this.setState(currentOrder);
  }

  signAgreement() {
    socketInstance.instance.emit('sign_agreement', this.state.orderID);
  }

  render() {
    return (
      <div className="order-3">
        <div className="gradient-img-driver-order">
          <span className="gradient" />
          <img className="driver-img-1" src={cargoTruck} alt="Cargo truck" />
        </div>
        <div className="terms-conditions">
          <h2>Terms & conditions &nbsp; &nbsp; &nbsp; &nbsp;<FontAwesomeIcon icon={faTruck} /></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore aspernatur repudiandae ipsam earum
          iure dignissimos odit voluptate? Eius commodi necessitatibus consequatur velit? Pariatur esse nemo cumque porro, error voluptates.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore aspernatur repudiandae ipsam earum
          iure dignissimos odit voluptate? Eius commodi necessitatibus consequatur velit? Pariatur esse nemo cumque porro, error voluptates.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore aspernatur repudiandae ipsam earum
          iure dignissimos odit voluptate? Eius commodi necessitatibus consequatur velit? Pariatur esse nemo cumque porro, error voluptates.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam tempore aspernatur repudiandae ipsam earum
          iure dignissimos odit voluptate? Eius commodi necessitatibus consequatur velit? Pariatur esse nemo cumque porro, error voluptates.</p>
        </div>

        <div>
          <div className="order-btn-3">
            <UIbutton onClick={this.signAgreement} component={Link} to={driver.order4} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
              ACCEPT & SEND &nbsp;<FontAwesomeIcon icon={faFileUpload} /></UIbutton>
            <UIbutton className="order-cancel-btn" name="button" color="default" fullWidth={true}>CANCEL</UIbutton>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Order3Container
}
