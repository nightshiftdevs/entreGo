import React, { Fragment, useState, useEffect, useRef } from 'react';
/* -------------------------
              leaflet dependencies
   ------------------------- */
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { latLngBounds } from 'leaflet';
import { carIcon, clientIcon } from './Icons';

/* -------------------------
              Socket instance
   ------------------------- */
import io from 'socket.io-client';
import {entregoBaseUrl} from '../../../environment';
import {socketUrl} from '../../../api';
const urlSocket = `${entregoBaseUrl}${socketUrl.connectSocketOrder}`;
let ordersSocket = io.connect(urlSocket);
// To connect Socket in Heroku
/* let ordersSocket = io.connect('https://socketleaflet.herokuapp.com/orders',
    { reconnect: true, transports: ['websocket'], path: '/socket.io' }); */

// Map tile layer
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';

function MapDriver2Container(props) {

  // Defining user profile and initial coordinates
  let userProfile = {
    username: props.username,
    userType: props.userType
  };

  let newlatlng = props.position;
  const new_lat = newlatlng[0];
  const new_lng = newlatlng[1];

  let Details = {
    username: props.username,
    active: true,
    new_lat: new_lat,
    new_lng: new_lng,
    update: true,
    userType: props.userType
  };

console.log('JOIN',props.inRoom)

  // useState Hooks
  let [inRoom, setInRoom] = useState(props.inRoom);
  let [insideRoom, setRoom] = useState(false);
  let [markers, setMarkers] = useState(null);
  // Persisting the zoom
  let [zoomMap, setZoomMap] = useState(16);

  // Refs to leaflet components
  const mapRef = useRef();
  console.log(props);
  // To joim room and  get data from connected users
  useEffect(() => {
    if (props.inRoom) {
      console.log('Joining room!');
      ordersSocket.emit('joinRoom', props.orderID);
      ordersSocket.on('success', msg => {
        setRoom({ insideRoom: msg })
        console.log('YOURE IN ROOM');
        ordersSocket.emit('load_init');
        ordersSocket.on('load_init', data => {
          console.log('DATAA!', data);
          setMarkers(data);
        });
        ordersSocket.emit('add user', userProfile);
      });
    };

    return () => {
      if (inRoom) {
        console.log('leaving room');
        setRoom({ insideRoom: false })
        ordersSocket.emit('leave room', {
          room: props.orderID
        });
      };
    };
  }, [props.position]);

  // To update coordinates
  useEffect(() => {
    if (insideRoom) {
      ordersSocket.emit('new_coords', Details);
      ordersSocket.on('updatecoords', function (data) {
      });
    }
  });

  // To adjust the viewport according to the connected users
  useEffect(() => {
    let positions = [
      [-12.918783699999999, -77.05737169999999],
      [-11.918783699999999, -77.05737169999999]
    ];
    positions = [props.position];

    if (markers) {
      markers.forEach((marker) => {
        positions.push([marker.lat, marker.lng]);
      })
      const bounds = latLngBounds(positions);
      if (bounds.length > 1) {
        mapRef.current.leafletElement.fitBounds(bounds);
      }
    }
  }, [props.position, markers]);

  // To set the zoom whenever the user changes it
  const zoomControl = (e) => {
    setZoomMap(mapRef.current.leafletElement.getZoom());
  };

  return (
    <Fragment>
      <Map ref={mapRef} className="map-template-2" onzoom={zoomControl} center={props.position} zoom={zoomMap} minZoom={10} maxZoom={25} zoomControl={false} attributionControl={false}>
        <TileLayer
          url={styleMap2}
        />
        {
          props.userType === '1' ? (
            <Marker position={props.position} icon={clientIcon} draggable="true">
              <Popup>
                <span>Cliente Online: {props.username}</span>
              </Popup>
            </Marker>
          ) : (
              <Marker position={props.position} icon={carIcon} draggable="true">
                <Popup >
                  <span>Conductor Online: {props.username}</span>
                </Popup>
              </Marker>
            )
        }
        {markers !== null && markers.map((marker, idx) => (
          marker.userType === '1' ?
            (<Marker key={`marker-${idx}`} position={[marker.lat, marker.lng]} icon={clientIcon} draggable="true">
              <Popup>
                <span>Cliente Online: {marker.username}</span>
              </Popup>
            </Marker>
            ) : (
              <Marker key={`marker-${idx}`} position={[marker.lat, marker.lng]} icon={carIcon} draggable="true">
                <Popup>
                  <span>Conductor Online: {marker.username}</span>
                </Popup>
              </Marker>
            )
        )
        )};
            </Map>
    </Fragment>
  )
};

export { MapDriver2Container };
