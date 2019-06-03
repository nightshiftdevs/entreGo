import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// For implementing alert messages
import { withAlert } from "react-alert";

class AlertsComponent extends Component {
  // Every time errors or messages are updated show specific alerts
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
    // Login errors
      if (error.msg.msg) alert.error(`${error.msg.msg}`);
    }

    if (message !== prevProps.message) {
    // Login success messages
      if (message.Loggedin) alert.success(message.Loggedin);
    }
  }

  render() {
    return <Fragment />;
  }
}

AlertsComponent.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

const Alerts = connect(mapStateToProps)(withAlert()(AlertsComponent));

export {
  Alerts
};
