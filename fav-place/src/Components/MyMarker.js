import { Marker } from "react-map-gl";
import React from "react";

const MyMarker = ({ marker }) => {
  console.log(marker);
  return (
    <div>
      <Marker
        key={marker.id}
        latitude={marker.lat}
        longitude={marker.lng}
        offsetLeft={-24}
        offsetTop={-48}
      >
        <i style={{ color: "red" }} className="fas fa-map-marker-alt"></i>
      </Marker>
    </div>
  );
};

export default MyMarker;
