import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { LandingLayout } from "../features/landing";
import { DriverFormLayout } from "../features/driverform";
import { DriverDashboard } from "../features/dashboard";
import { LeafletContainer } from "../features/leaflet-map";
import PrivateRoute from '../components/privateRoute/privateRoute.component';

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard/driver" component={DriverDashboard} />
        <Route path="/register/driver" component={DriverFormLayout} />
        <Route exact path="/access/map" component={LeafletContainer} />
        <Route exact path="/" component={LandingLayout} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
