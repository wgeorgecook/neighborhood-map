import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import MarkerView from './MarkerView.js';

class MapView extends Component {

    markers = this.props.markers;

    MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={this.props.defaultZoom}
            defaultCenter={this.props.defaultLocation}
            >
            {props.isMarkerShown && this.props.markers.map( (position, i) =>
                <div className="marker-and-info">
                    <div className="marker">
                        <Marker
                            key={i}
                            position={position}
                        />
                    </div>
                    <div className="infobox">
                        <MarkerView
                            key={i}
                            location={position}
                        />
                    </div>
                </div>
        )}

        </GoogleMap>
  ))


    render() {

        return (
            <div id="map">
            <this.MyMapComponent
                isMarkerShown={true}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABZJIOmyU36I209r096vcD_WY39JMxRPQ"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.props.defaultHeight }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
        )
    }
}

export default MapView;