import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './order3.container.scss'
import { driver } from '../../../../../helpers/urls';

import {
  UIbutton
} from '../../../../../ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
  faFileUpload
} from '@fortawesome/free-solid-svg-icons';

class Order3Container extends Component {
  render() {
    return (
      <div className="order-3">
        <div className="terms-conditions">
          <h2>Terms & conditions <FontAwesomeIcon icon={faTruck} /></h2>
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
            <UIbutton component={Link} to={driver.order4} className="order-accept-btn" name="button" variant="contained" color="primary" fullWidth={true}>
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
