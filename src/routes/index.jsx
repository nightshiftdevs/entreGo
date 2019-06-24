import React from "react";
import hashHistory from '../history';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { LandingLayout } from "../features/landing";
import { DriverFormLayout } from "../features/driverform";
import {
  DriverLayout,
  OrderLayout,
  Order2Layout,
  Order3Layout,
  Order4Layout,
  Order5Layout,
  UserLayout,
  OrderClient2Layout,
  OrderClient3Layout,
  OrderClient4Layout,
  OrderClient5Layout,
  OrderClient6Layout,
  OrderClient7Layout
} from "../features/dashboard";
import PrivateRoute from '../components/privateRoute/privateRoute.component';

function Routes() {
  return (
    <Router history={hashHistory}>
      <Switch>
        <PrivateRoute path="/dashboard/driver/order-5" component={Order5Layout} />
        <PrivateRoute path="/dashboard/driver/order-4" component={Order4Layout} />
        <PrivateRoute path="/dashboard/driver/order-3" component={Order3Layout} />
        <PrivateRoute path="/dashboard/driver/order-2" component={Order2Layout} />
        <PrivateRoute path="/dashboard/driver/order-1" component={OrderLayout} />
        <PrivateRoute path="/dashboard/driver" component={DriverLayout} />
        <Route path="/dashboard/user/order-7" component={OrderClient7Layout} />
        <Route path="/dashboard/user/order-6" component={OrderClient6Layout} />
        <Route path="/dashboard/user/order-5" component={OrderClient5Layout} />
        <Route path="/dashboard/user/order-4" component={OrderClient4Layout} />
        <Route path="/dashboard/user/order-3" component={OrderClient3Layout} />
        <Route path="/dashboard/user/order-2" component={OrderClient2Layout} />
        <Route path="/dashboard/user" component={UserLayout} />
        <Route path="/register/driver" component={DriverFormLayout} />
        <Route exact path="/" component={LandingLayout} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
