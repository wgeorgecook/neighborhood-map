import React, { Component } from 'react';
import ListView from './ListView.js';
import MapView from './MapView.js';
import './App.css';

class App extends Component {
  data = require('./data.json');

  state = {
    updated: false,
    attractions: [],
    markers: [
      {"lat": 28.4180168, "lng":-81.5851817},
      {"lat":28.418971, "lng":-81.5801939}
    ]
  }

  render() {
    return (
      <div className="App">
        <ListView
        attractions={this.data}
        />

        <MapView
          defaultLocation={{lat:28.417664 , lng: -81.581215}}
          defaultZoom={15}
          defaultHeight={'400px'}
          defaultMarkers={{lat:28.417664 , lng: -81.581215}}
          markers={this.state.markers}
        />
      </div>
    );
  }
}

export default App;
