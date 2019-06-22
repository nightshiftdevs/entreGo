import React, { Component } from 'react'
import { MapDriver2Layout } from '../../../../../components';
import userPlaceHolder from '../../../../../assets/img/userplaceholder.png'

import './order3.container.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faLocationArrow,
  faTruck,
  faGlasses
} from '@fortawesome/free-solid-svg-icons';

class OrderClient3Container extends Component {
  render() {
    return (
      <div className="order-3">
        <MapDriver2Layout />
        <div>
          <div className="order-user">
            <img className="order-data-userphoto" src={userPlaceHolder} alt="user photo" />
            <p className="order-data-client">A really really long name</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Start address:</p>
            <p className="order-data-content">My start destination is too long so I can test how will it look Dpto. 1504</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faLocationArrow} /> Dest. address:</p>
            <p className="order-data-content">My final destination is too long so I can test how will it look</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faTruck} /> Cargo volume:</p>
            <p className="order-data-content">245 m3</p>
          </div>
          <div className="order-data">
            <p className="order-data-label"><FontAwesomeIcon icon={faGlasses} /> Observation:</p>
            <p className="order-data-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in, atque, iste sed autem</p>
          </div>
        </div>
      </div>
    );
  }
}

export {
  OrderClient3Container
}
