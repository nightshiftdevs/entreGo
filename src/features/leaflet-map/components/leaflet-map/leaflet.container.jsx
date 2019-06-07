import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { render } from 'react-dom';
import './leaflet.container.scss';


class LeafletContainer extends Component {
  constructor() {
    super()
    this.state = {
      lat: -12.100523,
      lng: -77.035926,
      zoom: 30
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>
            Hola!. <br /> Roxana.
          </span>
        </Popup>
      </Marker>
    </Map>
    );
  }
}

export {
  LeafletContainer
};





