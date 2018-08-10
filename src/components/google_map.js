import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />; // gives a reference to the component on the page i.e.  this.refs.map
    }
}

export default GoogleMap;