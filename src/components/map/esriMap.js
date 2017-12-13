import React, { Component } from "react";
import "./map.css";
import { dojoRequire } from "esri-loader";
import EsriLoader from "esri-loader-react";
import PropTypes from "prop-types";

class ESRIMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.esri_map;
    this.mapView;
    this.VectorTileLayer;

    this.updateESRI = this.updateESRI.bind(this);
  }

  componentWillReceiveProps = newProps => {
    if (this.mapView && this.props.esriUrl !== newProps.esriUrl) {
      this.updateESRI(newProps);
    }
  };

  updateESRI(newProps) {
    this.esri_map.removeAll();
    let VTLayer = new this.VectorTileLayer({
      url: newProps.esriUrl
    });
    this.esri_map.add(VTLayer);
    let theMapView = this.mapView;
    this.mapView.then(function() {
      theMapView.goTo({
        center: [newProps.center[0], newProps.center[1]],
        zoom: Number(newProps.zoom)
      });
    });
  }

  handleMove() {
    let mapMovements = {
      zoom: parseFloat(this.mapView.getZoom().toPrecision(3)),
      center: this.mapView.getCenter(),
      pitch: Math.floor(this.mapView.getPitch()),
      bearing: Math.floor(this.mapView.getBearing())
    };
    this.props.actions.trackMapMovement(mapMovements);
  }

  createMap = () => {
    dojoRequire(
      [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/VectorTileLayer",
        "esri/widgets/Search"
      ],
      (Map, MapView, VectorTileLayer, Search) => {
        this.VectorTileLayer = VectorTileLayer;
        this.esri_map = new Map();
        this.mapView = new MapView({
          container: this.mapContainer,
          map: this.esri_map,
          center: [this.props.center[0], this.props.center[1]],
          zoom: Number(this.props.zoom)
        });

        let VTLayer = new VectorTileLayer({
          url:
            "http://www.arcgis.com/sharing/rest/content/items/95d4d6b61c0b4690adaf8cbdabb28196/resources/styles/root.json"
          // url: this.props.esriUrl
        });

        let searchWidget = new Search({
          view: this.mapView
        });

        this.mapView.ui.move(["zoom"], "bottom-right");

        this.mapView.ui.add(searchWidget, {
          position: "top-left",
          index: 2
        });
        let theMapView = this.mapView;
        this.mapView.on('drag', function(evt){
            if(evt.action == 'end'){
                debugger;
                console.log("the lat is" + theMapView.center.latitude);
                console.log("the long is" + theMapView.center.longitude);
                console.log("the zoom is" + theMapView.zoom);
                console.log('this is it ' + evt.action);
            }

          // var point = view2d.toMap({x: evt.x, y: evt.y});
          // bufferPoint(point);
        });

        this.esri_map.add(VTLayer);
      }
    );
  };

  render() {
    const options = {
      url: "https://js.arcgis.com/4.4/"
    };

    return (
      <div className={`App ${this.props.hidden}`}>
        <EsriLoader options={options} ready={this.createMap} />
        <div
          style={this.props.containerStyle}
          ref={node => (this.mapContainer = node)}
          className="map-view"
        />
      </div>
    );
  }
}

ESRIMap.propTypes = {
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  hidden: PropTypes.string.isRequired,
  containerStyle: PropTypes.object.isRequired,
  esriUrl: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

export default ESRIMap;
