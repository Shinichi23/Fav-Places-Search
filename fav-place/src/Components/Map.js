import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import MyMarker from "./MyMarker";
import { useSelector } from "react-redux";

const Map = () => {
  const [overview, setOverview] = useState({
    latitude: 36.772249599999995,
    longitude: 3.0343168,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  const { mark } = useSelector((state) => state.mark);

  return (
    <ReactMapGl
      {...overview}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setOverview(viewport)}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      {mark && mark.map((marker) => <MyMarker marker={marker}></MyMarker>)}
    </ReactMapGl>
  );
};
export default Map;
