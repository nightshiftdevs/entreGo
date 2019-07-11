import React, { Fragment, Component } from "react";
import MapDriver1Container from "./map.container";

class MapDriver1Layout extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <MapDriver1Container {...this.props} />
      </Fragment>
    );
  }
}

export {
  MapDriver1Layout
}
