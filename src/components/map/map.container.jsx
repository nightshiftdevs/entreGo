import React, { useEffect, useRef } from "react";
import L from "leaflet";

const styleMap1 = 'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
const styleMap2 = 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png';
const styleMap3 = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

function Map({ markerPosition }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map('map-template', {
      center: [49.8419, 24.0315],
      zoom: 13,
      layers: [
        L.tileLayer(styleMap2)
      ]
    });
  }, []);

  // add marker
  const markerRef = useRef(null);
  useEffect(
    
    () => {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition);
      } else {
        markerRef.current = L.marker(markerPosition).addTo(mapRef.current);
      }
    },
    [markerPosition]
  );

  return <div id="map-template" />;
}

export default Map;

