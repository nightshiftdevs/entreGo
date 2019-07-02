import React, { Fragment, useState } from "react";
import {MapDriver2Container} from "./map.container";

function MapDriver2Layout(props) {
  console.log('PROPS',props);

  const [position, setPosition] = useState([0, 0]);
  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  return (
    <Fragment>
      <MapDriver2Container position={position} username={props.username} userType={props.userType} orderID={props.orderID} inRoom={props.inRoom} />
    </Fragment>
  );
}

export {
  MapDriver2Layout
}
