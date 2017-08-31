import mapboxgl from 'mapbox-gl';
import React from 'react';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import PropTypes from 'prop-types';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    // this.handleMove = this.handleMove.bind(this)
  }

  componentDidMount() {
    mapboxgl.accessToken = "pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A";
    if (!mapboxgl.supported()) {
      // console.log('WARNING: Your browser is not officailly supported by Mapbox GL');
    }
    const map = new mapboxgl.Map({
      container: this.container,
      style: this.props.style,
      center: [-122.010406, 36.964643],
      zoom: 3,
      hash: true
    });
    map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken}), "top-left");
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // map.flyTo({ center: this.props.center, zoom: this.props.zoom })

    window.map = map;
    this.setState({ active: true });
    // map.on('moveend', this.handleMove)
  }

  // handleMove(e) {
  //   store.zoom = map.getZoom().toPrecision(3)
  //   store.center = map.getCenter()
  //   store.lat = store.center.lat.toPrecision(6)
  //   store.lng = fixLongitude(store.center.lng).toPrecision(6)
  //   store.pitch = Math.floor(map.getPitch())
  //   store.bearing = Math.floor(map.getBearing())
  // }

  render() {
    // const { children } = this.props;
    // const { map } = this.state;
    return (
      <div
        style={this.props.containerStyle}
        className = {this.props.hidden}
        ref={(mapDiv) => {
          this.container = mapDiv;
        }}
        />
    );
  }
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  hidden: PropTypes.string.isRequired,
  containerStyle: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};
