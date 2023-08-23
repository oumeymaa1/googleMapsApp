// src/Map.js
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap(() => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 37.7749, lng: -122.4194 }}>
    <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
  </GoogleMap>
)));

const Map = () => {
  return (
    <MapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '500px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
};

export default Map;
