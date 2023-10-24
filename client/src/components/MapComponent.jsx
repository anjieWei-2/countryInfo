import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ lat, lng, capital }) => {
    const position = [lat, lng];
    const Recenter = ({lat,lng}) => {
      const map = useMap();
      useEffect(() => {
          map.setView([lat, lng]);
      }, [lat, lng]);
      return null;
  }
  
    return (
      <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <MapContainer center={position} zoom={12}>
        <Recenter lat={lat} lng={lng} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker position={position}>
        <Popup>{capital}</Popup>
      </Marker>
      </MapContainer></>
    );
  };
  
  export default MapComponent;
