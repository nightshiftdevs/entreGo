import React, { useRef } from "react";
import { Map, TileLayer, Marker, MapControl, Popup, ZoomControl, withLeaflet } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const styleMap1 = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
const styleMap3 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

class SearchMap extends MapControl {
  createLeafletElement() {
    // console.log('geo')
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'bar',
      showMarker: true,
      marker: {                                           // optional: L.Marker    - default L.Icon.Default
        icon: new L.Icon.Default(),
        draggable: true,
      },
      showPopup: false,
      maxMarkers: 2,
      autoClose: true,
      animateZoom: true,
      keepResult: false,
      searchLabel: 'Enter destination address', 
    });
  }
}

function MapUser1Container() {
  const SearchBar = withLeaflet(SearchMap);
  const [position, setPosition] = React.useState([0, 0]);

  const mapRef = useRef();
  const searchRef = useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      console.log('position', pos)
    });

    return () => {
      navigator.geolocation.clearWatch(watchID);
    };
  }, []);

  const [dirLabel, setdirLabel] = React.useState(['', '']);
  React.useEffect(() => {
    mapRef.current.leafletElement.on('geosearch/showlocation', (value) => {
      setdirLabel(value.location.label);
    })
  }, [])

  const [lastCoordenate, setLastCoordenate] = React.useState([0, 0]);
  React.useEffect(() => {
    mapRef.current.leafletElement.on('geosearch/showlocation', (value) => {
      setLastCoordenate([parseFloat(value.location.x), parseFloat(value.location.y)]);
      L.marker(setLastCoordenate).addTo(map);
      console.log('lastCoordenate', value)
    })
  }, [])


  const map = (
    <React.Fragment>
      <div>position {position}</div>
      <div>lastCoordenate {lastCoordenate}</div>
      <div>full dir {dirLabel}</div>
      <Map ref={mapRef} className="map-template-4" center={position} zoom={13} zoomControl={false} attributionControl={false}
      >
        <TileLayer
          url={styleMap2}
        />
        <SearchBar ref={searchRef} />
        <Marker position={position} />

      </Map>
    </React.Fragment>
  );

  return map;
}

export default MapUser1Container;
