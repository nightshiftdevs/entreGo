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
        draggable: false,
      },
      showPopup: false,
      maxMarkers: 2,
      autoClose: true,
      animateZoom: true,
      keepResult: false
    });
  }
}

// class MapUser1Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       position: [0,0],
//       positions: []
//     }
//     this.watchID;
//     this.mapRef = React.createRef();
//   }

//   componentDidMount() {
//     this.SearchBar = withLeaflet(SearchMap);
//     this.watchID = navigator.geolocation.watchPosition(pos => {
//       console.log('pos', pos)
//       this.setState(() => ({
//         position: [pos.coords.latitude, pos.coords.longitude]
//       }));
//       // coordenates.push([pos.coords.latitude, pos.coords.longitude]);
//       // this.setState({
//       //   positions: [[pos.coords.latitude, pos.coords.longitude]]
//       // })
//     });

//     this.mapRef.current.leafletElement.on('geosearch/showlocation', (value) => {
//       // coordenates.push([value.location.x, value.location.y]);
//       this.handlePosition([value.location.x, value.location.y]);
//     })
//   }

//   handlePosition(coordenates) {
//     this.setState({
//       positions: coordenates
//     })
//   }

//   componentDidUpdate() {
//     console.log('this.state', this.state)
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         {this.state.positions}
//         {/* position{position} */}
//         {/* <div>allCoordenates {allCoordenates}</div> */}
//         <Map ref={this.mapRef} className="map-template-4" center={this.state.position} zoom={13} zoomControl={false} attributionControl={false}
//         >
//           <TileLayer
//             url={styleMap2}
//           />
//           {this.SearchBar}
//         </Map>
//       </React.Fragment>
//     )
//   }
// }


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

  const [lastCoordenate, setLastCoordenate] = React.useState([0, 0]);
  React.useEffect(() => {
    mapRef.current.leafletElement.on('geosearch/showlocation', (value) => {
      setLastCoordenate([Number.parseFloat(value.location.bounds[0][0]), Number.parseFloat(value.location.bounds[0][1])]);
      console.log('lastCoordenate', value)
    })
  }, [lastCoordenate])


  const map = (
    <React.Fragment>
      {/* position{position}
      <div>lastCoordenate {lastCoordenate}</div> */}
      <Map ref={mapRef} className="map-template-4" center={position} zoom={13} zoomControl={false} attributionControl={false}
      >
        <TileLayer
          url={styleMap2}
        />
        <SearchBar ref={searchRef} />
        <Marker position={position} />
        <Marker position={lastCoordenate} />

      </Map>
    </React.Fragment>
  );

  return map;
}

export default MapUser1Container;
