import React, { Component } from 'react';

import './landing.container.scss'
import cargoTruck from '../../../../assets/img/cargoTruck.jpg'
import cargoTruck2 from '../../../../assets/img/cargoTruck2.jpg'

class LandingContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="gradient-img">
          <span className="gradient" />
          <img className="landing-img-0" src={cargoTruck} />
          <div className="about">
            <div className="about-summary">
              <div className="inside-container">
                <h2 className="subtitle">e n t r e G o</h2>
                <p className="about-summary-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam autem harum perferendis,
                  cupiditate et eos non omnis voluptatibus vitae ipsum commodi sapiente repudiandae tenetur mollitia,
                  fugiat incidunt iure repellendus minus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <div className="gradient-img-1">
                <span className="gradient-1" />
                <img className="landing-img-1" src={cargoTruck2} />
              </div>
              <div className="about-detail-text">
                <h2 className="title">WHY entreGo?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam autem harum perferendis,
                  cupiditate et eos non omnis voluptatibus vitae ipsum commodi sapiente repudiandae tenetur mollitia,
                  fugiat incidunt iure repellendus minus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export {
  LandingContainer
}
