import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { addClassToEvent } from '../../../../helpers/dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faLocationArrow,
  faPhone,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';

import { gradientEffect } from '../../../../helpers/effects/underline'

import './landing.container.scss'
import cargoTruck from '../../../../assets/img/cargoTruck.jpg'
import cargoTruck2 from '../../../../assets/img/cargoTruck2.jpg'
import cargoTruck3 from '../../../../assets/img/cargoTruck3.jpg'
import cargoTruck4 from '../../../../assets/img/cargoTruck4.jpg'
import cargoTruck5 from '../../../../assets/img/cargoTruck5.jpg'

import { LoginLayout } from '../../../login'
import { UserFormLayout } from '../../../userform';
import { driver } from '../../../../helpers/urls';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    gradientEffect();
  }

  componentDidMount() {
    addClassToEvent('js_register', 'click', 'register-user', 'slide-from-right-max', 'login-user', 'slide-from-right')
    addClassToEvent('js_login', 'click', 'login-user', 'slide-from-right', 'register-user', 'slide-from-right-max')
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing-page">
          <div className="gradient-img">
            <span className="gradient" />
            <img className="landing-img-0" src={cargoTruck} alt="Cargo truck" />
            <div className="register-login">
              <button className="btn btn-register js_register">R E G I S T E R</button>
              <button className="btn js_login">L O G I N</button>
            </div>
            <div className="login-user">
              <LoginLayout />
            </div>
            <div className="register-user">
              <UserFormLayout />
            </div>
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
                <img className="landing-img-1" src={cargoTruck2} alt="Cargo truck" />
              </div>
              <div className="about-detail-text">
                <h2 className="title">WHY entreGo?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam autem harum perferendis,
                  cupiditate et eos non omnis voluptatibus vitae ipsum commodi sapiente repudiandae tenetur mollitia.
                </p>
              </div>
            </div>
          </section>

          <section className="services">
            <div className="underline-effect">
              <h2 className="title">S E R V I C E S</h2>
              <div className="inside-container service-text">
                <div className="services-types">
                  <div className="service-description">
                    <h4>S E R V I C E 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                      tempora aliquid.</p>
                  </div>
                  <div className="service-description">
                    <h4>S E R V I C E 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                     tempora aliquid.</p>
                  </div>
                </div>
                <div className="services-types">
                  <div className="service-description">
                    <h4>S E R V I C E 2</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                      tempora aliquid.</p>
                  </div>
                  <div className="service-description">
                    <h4>S E R V I C E 2</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                     tempora aliquid.</p>
                  </div>
                </div>
                <div className="services-types">
                  <div className="service-description">
                    <h4>S E R V I C E 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                      tempora aliquid.</p>
                  </div>
                  <div className="service-description">
                    <h4>S E R V I C E 3</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                     tempora aliquid.</p>
                  </div>
                </div>

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
              </div>
            </div>

            <div className="services-imgs">
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck3} alt="Cargo truck" />
              </div>
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck4} alt="Cargo truck" />
              </div>
              <div className="gradient-img-2">
                <span className="gradient-2" />
                <img className="landing-img-2" src={cargoTruck5} alt="Cargo truck" />
              </div>
            </div>
          </section>

          <section className="work-with-us">
            <h2 className="title">W O R K &nbsp; W I T H &nbsp; U S</h2>
            <div className="start-to-work">
              <Link to={driver.register} className="btn-work">S T A R T &nbsp; N O W !</Link>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div className="benefit-text">
                <h4>B E N E F I T 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                   tempora aliquid.</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-text">
                <h4>B E N E F I T 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                   tempora aliquid.</p>
              </div>
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </div>
              <div className="benefit-text">
                <h4>B E N E F I T 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iusto. Iste facere a,
                   tempora aliquid.</p>
              </div>
            </div>
          </section>

          <section className="statistics">
            <div className="statistics-type">
              <p className="statistics-number">150 K+</p>
              <p className="statistics-label">Satisfied Users</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">15 K+</p>
              <p className="statistics-label">Happy Drivers</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">800 K+</p>
              <p className="statistics-label">Completed Shipments</p>
            </div>
            <div className="statistics-type">
              <p className="statistics-number">20 K+</p>
              <p className="statistics-label">Founding</p>
            </div>
          </section>

          <section className="contact">
            <div className="contact-text">
              <h2 className="subtitle">C O N T A C T</h2>
              <p className="bold">Doubts? Contact with us!</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam autem harum perferendis,
                cupiditate et eos non omnis voluptatibus vitae ipsum commodi sapiente repudiandae tenetur mollitia.
              </p>
              <div className="contact-data">
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faLocationArrow} />Recavarren 111, Floor 7</p>
                  <p className="contact-personal-text">Miraflores, Lima</p>
                </div>
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faPhone} />(51) - 943484768</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;(51) - 957276765</p>
                </div>
              </div>
              <div className="contact-data">
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faEnvelope} />entrego.supp@gmail.com</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;app.entrego@gmail.com</p>
                </div>
                <div className="contact-personal">
                  <p className="contact-personal-text"><FontAwesomeIcon className="contact-icon" icon={faClock} />M-F: 9AM - 5PM</p>
                  <p className="contact-personal-text">&nbsp; &nbsp; &nbsp; &nbsp;Sa: 10AM - 1PM</p>
                </div>
              </div>
            </div>
          </section>

          <section className="foot-logo">
            <h2 className="max-logo">e n t r e G o</h2>
          </section>

        </div>
      </React.Fragment >
    )
  }
}

export {
  LandingContainer
}
