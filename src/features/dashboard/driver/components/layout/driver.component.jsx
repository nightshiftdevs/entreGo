import React, { Component } from "react";

import {
  Main,
  Aside
} from '../../../../../components';

import { DriverDashboard } from "../driver/driver.container";

import { UserService, userUrls } from '../../../../../api'
let userService = new UserService();

class DriverLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      updated: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let user = localStorage.getItem('username');
    userService.getUser(userUrls.driverDetails, { username: user }).then((res) => {
      this.setState({
        data: res.data.list
      });
      localStorage.setItem('driverDetails', JSON.stringify(res.data.list));
    });
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.ready !== true) {
      this.setState({ ready: true });
      console.log('updated');
    }
  }

  render() {
    return (
      <div className="container-dashboard" >
        <Aside {...this.state} />
        <div className="main-dashboard">
          <Main>
            <DriverDashboard />
          </Main>
        </div>
      </div>
    )
  }
};

export {
  DriverLayout
}
