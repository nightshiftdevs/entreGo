import React, { Component } from 'react'
import { MapDriver2Layout } from '../../../../../components';
import userPlaceHolder from '../../../../../assets/img/userplaceholder.png'
import vehiclePlaceHolder from '../../../../../assets/img/vehicleplaceholder.png'

import './order3.container.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faTruck,
  faShippingFast
} from '@fortawesome/free-solid-svg-icons';

class OrderClient3Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driverRate: '4.5',
    }
  }

  render() {
    return (
      <div className="order-3">
        <MapDriver2Layout />
        <div>
          <div className="order-driver">
            <img className="order-data-driverphoto" src={userPlaceHolder} alt="user photo" />
            <div>
              <p className="order-data-driver">A really long driver's name</p>
              <p className="order-data-content">{this.state.driverRate}&nbsp;<FontAwesomeIcon icon={faStar} /></p>
            </div>
          </div>
          <div className="order-driver">
            <img className="order-data-vehiclephoto" src={vehiclePlaceHolder} alt="user photo" />
            <div>
              <div className="order-data">
                <p className="order-data-label"><FontAwesomeIcon icon={faTruck} />&nbsp;Vehicle Brand:</p>
                <p className="order-data-content">Mercedez-Benz Atego 2019</p>
              </div>
              <div className="order-data">
                <p className="order-data-label"><FontAwesomeIcon icon={faShippingFast} />&nbsp;Vehicle Plate:</p>
                <p className="order-data-content">TGH-564</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {
  OrderClient3Container
}
