import React from "react";
import { Map as LeafletMap, TileLayer } from "leaflet";
import styled from 'styled-components';
import { showDataOnMap } from '../util';

function Map({ countries, casesType, center, zoom }) {
  return (
    <Div >
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </Div>
  );
}

export default Map;

const Div = styled.div`
height: 500px;
background-color: white;
padding: 1rem;
border-radius: 20px;
margin-top: 16px;
box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
.leaflet-container {
  height: 100%;
  border-radius: 12px;
}

`