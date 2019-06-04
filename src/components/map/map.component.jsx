import React, { useState } from "react";
import Map from "./map.container";

function MapLayout() {
  const [markerPosition] = useState({
    lat: 49.8419,
    lng: 24.0315
  });

  return (
    <div>
      <Map markerPosition={markerPosition} />
    </div>
  );
}

export{
  MapLayout
}
