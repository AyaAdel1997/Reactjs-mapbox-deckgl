
import React, { Component } from 'react';
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
const mapboxToken  = 'pk.eyJ1IjoiYXlhYWRlbCIsImEiOiJja3ZwZzIwZWkxczd0MnFvdXpuNHB4M3ByIn0.EBW8kEBtDcW5YfUU7iIFkg';



class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 40.78343,
        longitude: -73.96625,
        zoom: 11
      },
      Styles :[
        {id: "satellite-v9", value:"satellite"},
        {id: "streets-v11" , value: "streets" },
        {id: "light-v10" , value: "light"},
        {id: "dark-v10" , value: "dark"}
        
    ]
    }
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }
  handleViewportChange(viewport) {
    this.setState(prevState => ({
      viewport: {...prevState.viewport, ...viewport}
    }))
  }
  render() {
    return (
      <ReactMapGl
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      />
    )
  }
}

export default Map;