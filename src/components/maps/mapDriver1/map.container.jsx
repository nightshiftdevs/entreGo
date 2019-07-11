import React, { useRef } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const styleMap1 = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
const styleMap3 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

function MapDriver1Container(props) {
  console.log('MAPPROPS', props);

  let startCoord = [props.startLat, props.startLng];
  let endCoord = [props.endLat, props.endLng];
  let midCoord = [(startCoord[0] + endCoord[0]) * .5, (startCoord[1] + endCoord[1]) * .5];
  let arrayCoords = [startCoord, endCoord];

  const mapRef = useRef();
  // Adjust map to view according to coordinates
  React.useEffect(() => {
    mapRef.current.leafletElement.fitBounds(arrayCoords);
  });
  // Persisting the zoom
  let[zoomMap, setZoomMap] = React.useState(13);
  // To set the zoom whenever the user changes it
  const zoomControl = (e) => {
    setZoomMap(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <Map ref={mapRef} className="map-template-1" center={midCoord} onzoom={zoomControl} zoom={zoomMap} minZoom={10} maxZoom={25} zoomControl={false} attributionControl={false}>
      <TileLayer
        url={styleMap2}
      />
      <Marker position={startCoord} />
      <Marker position={endCoord} />
    </Map>
  );
  return map;
}

export default MapDriver1Container;
