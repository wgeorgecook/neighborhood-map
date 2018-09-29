import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';
import './blue-dot.png'

class App extends Component {
  data = require('./data.json');
  allMarkersData = this.data.rides.map( ride => ride )

  state = {
    attractions: this.allMarkersData,
    clearInfoWindows: false
  }

  newMarkers = (attractions) => {
    this.setState(
        {attractions: attractions})
  }


  animateMarker = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome to the Magic Kingdom!</h1>
        <ListView
          attractions={this.state.attractions}
          onNewMarkers={this.newMarkers}
          animate={this.animateMarker}
        />

        <MapView
          defaultLocation={{lat:28.418744, lng:-81.581203}}
          defaultZoom={16}
          defaultHeight={'400px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markers={this.state.attractions}
        />
      </div>
    );
  }
}

export default App;
