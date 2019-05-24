import React, { Component } from 'react';

import { gradientEffect } from '../../../../helpers/effects/underline'

import './landing.container.scss'
import cargoTruck from '../../../../assets/img/cargoTruck.jpg'
import cargoTruck2 from '../../../../assets/img/cargoTruck2.jpg'

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    gradientEffect();
  }
  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <div className="gradient-img">
            <span className="gradient" />
            <img className="landing-img-0" src={cargoTruck} />
          </div>
          <section className="about">
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
          </section>

          <section className="services">
            <div className="underline-effect">
              <h2 className="title">S E R V I C E S</h2>
              <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                 tempora aliquid ab cupiditate ut hic enim corporis, reiciendis sunt omnis,
                 nostrum quia officiis aut in voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                 tempora aliquid ab cupiditate ut hic enim corporis, reiciendis sunt omnis,
                 nostrum quia officiis aut in voluptatem.</p>
              <br />
            </div>
          </section>
        </div>
      </React.Fragment >
    )
  }
}

export {
  LandingContainer
}
