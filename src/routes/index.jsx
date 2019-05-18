import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { LandingLayout} from "../features/landing";
import { LoginLayout } from "../features/login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginLayout} />
        <Route exact path="/home" component={LandingLayout} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
