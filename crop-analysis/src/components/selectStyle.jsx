import React, {PureComponent} from 'react';

import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';


import { IconLayer } from "@deck.gl/layers";
import { cropData } from "../data";
 

const MAPBOX_TOKEN = 'pk.eyJ1IjoibHh0aWFudGlhbiIsImEiOiJjaXd2ZjlkYnQwMTZvMnRtYWZnM2lpbHFvIn0.ef3rFZTr9psmLWahrqap2A'; // eslint-disable-line

const INITIAL_VIEW_STATE = {
    longitude: 31.233334,
    latitude:  30.033333,
    zoom: 8,
    maxZoom: 16,
    pitch: 0,
    bearing: 0,
   
   
};
const ICON_MAPPING = {
    marker: {x: 0, y: 0, width: 128,  anchorY: 128,height: 128, mask: true}
  };
 
class LayeredMap extends React.Component {




    render() {
        
    const layer=[
      new IconLayer({
        id: "IconLayer",
    data:cropData,
    getPosition: d => d.coordinates,
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: ICON_MAPPING,
    getIcon: d => 'marker',

    sizeScale: 15,
    
    getSize: d => 5,
    getColor: d => [Math.sqrt(d.exits), 140, 0],
  
  pickable: true,
      })
    ];
  
 
    
    const {mapStyle = 'mapbox://styles/mapbox/light-v10'} = this.props;
 
    return (
        
        <React.Fragment>
        
        <DeckGL
          
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          height='90%'
          width='100%'
          
          layers={layer}
          getTooltip={({object}) => object && `${object.city}\n${object.crops}`}
        >
          <StaticMap
            reuseMaps
            mapStyle={mapStyle}
            preventStyleDiffing={true}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
        </DeckGL>
        <select  >
    <option  value="mapbox://styles/mapbox/dark-v10">Dark</option>
    <option selected value="mapbox://styles/mapbox/light-v10">Light</option>
    <option value="mapbox://styles/mapbox/outdoors-v11">Outdoors</option>
    <option  value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
  </select>
        </React.Fragment>
    );
    
  }
}
 
export default LayeredMap;
 