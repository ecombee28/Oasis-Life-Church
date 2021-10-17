import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { mapStyles } from "../Styles/ComponentStyles/mapStyles";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 33.48002922905522,
  lng: -112.19567394475119,
};

const options = {
  styles: mapStyles,
};

const MapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyAzEL-yWZea0LW9s2rgtR2sc1xiiFxIFTk`,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className="App">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={30}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default MapComponent;
