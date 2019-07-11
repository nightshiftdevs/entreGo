import React, { useRef } from "react";
import { Map, TileLayer, Marker, MapControl, Popup, ZoomControl, withLeaflet } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { carIcon, clientIcon } from '../mapDriver2/Icons';

const styleMap1 = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
const styleMap3 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

class SearchMap extends MapControl {
  createLeafletElement() {
    // console.log('geo')
    return GeoSearchControl({
      provider: new OpenStreetMapProvider(),
      style: 'button',
      showMarker: false,
      marker: {                                           // optional: L.Marker    - default L.Icon.Default
        icon: new L.Icon.Default(),
        draggable: true,
      },
      showPopup: false,
      maxMarkers: 2,
      autoClose: false,
      animateZoom: false,
      keepResult: false,
      searchLabel: 'Enter destination address',
    });
  }
}

function MapUser1Container() {
  

  const SearchBar = withLeaflet(SearchMap);
  const [position, setPosition] = React.useState([-12.1196426, -77.03382040]);
  let mapCenterPosition = position;

  const mapRef = useRef();
  const searchRef = useRef();

  React.useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(pos => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      mapCenterPosition = position;
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
      setLastCoordenate([parseFloat(value.location.y), parseFloat(value.location.x)]);

      console.log('lastCoordenate', value);
    })
  }, [])

  let array = [position, lastCoordenate];

  React.useEffect(() => {
    let midCoord = [(position[0] + lastCoordenate[0]) * .5, (position[1] + lastCoordenate[1]) * .5];
    mapCenterPosition = midCoord;
    if (array[1][1] !== 0) {
      mapRef.current.leafletElement.fitBounds(array, { padding: [40, 40] });
    }
    let infoToGenerateOrder = Object.assign({},
      { startLat: position[0] },
      { startLng: position[1] },
      { endLat: lastCoordenate[0] },
      { endLng: lastCoordenate[1] },
      { endAddress: dirLabel }
    );
    localStorage.setItem(`infoMap`, JSON.stringify(infoToGenerateOrder));
  }, [lastCoordenate])

  // Persisting the zoom
  let [zoomMap, setZoomMap] = React.useState(13);
  // To set the zoom whenever the user changes it
  const zoomControl = (e) => {
    setZoomMap(mapRef.current.leafletElement.getZoom());
  };

  const map = (
    <React.Fragment>
      <div>position {position}</div>
      <div>lastCoordenate {lastCoordenate}</div>
      <div>full dir {dirLabel}</div>

      <Map ref={mapRef} className="map-template-4" center={mapCenterPosition} onzoom={zoomControl} zoom={zoomMap} minZoom={10} maxZoom={25} zoomControl={false} attributionControl={false}
      >
        <TileLayer
          url={styleMap2}
        />
        <SearchBar ref={searchRef} />
        <Marker position={position}>
        </Marker>
        {array[1][0] !== 0 ?
          (<Marker key={`marker-1`} icon={clientIcon} position={array[1]}>
            <Popup>
              <span>Dirección de destino</span>
            </Popup>
          </Marker>) : (
            null
          )
        };
      </Map>
    </React.Fragment>
  );

  return map;
}

export default MapUser1Container;
