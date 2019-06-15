import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const styleMap1 = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
const styleMap3 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

function MapDriver1Container() {
  const [position, setPosition] = React.useState([0, 0]);

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, [setPosition]);

  const map = (
    <Map className="map-template-1" center={position} zoom={13} zoomControl={false} attributionControl={false}>
      <TileLayer
        url={styleMap2}
      />
      <Marker position={position} />
    </Map>
  );
  console.log('update-map', position);
  return map;
}

export default MapDriver1Container;
