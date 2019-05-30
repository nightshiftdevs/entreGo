import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { LandingLayout } from "../features/landing";
import { LoginLayout } from "../features/login";
import { DriverFormLayout } from "../features/driverform";
import { UserFormLayout } from "../features/userform";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/register/driver" component={DriverFormLayout} />
        <Route path="/register/user" component={UserFormLayout} />
        <Route path="/login" component={LoginLayout} />
        <Route exact path="/" component={LandingLayout} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
