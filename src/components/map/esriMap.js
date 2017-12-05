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
    this.vtLayer;
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
          debugger;
        this.esri_map = new Map();
        this.mapView = new MapView({
          container: this.mapContainer,
          map: this.esri_map,
          center: [
            this.props.mapMovements.center.lng,
            this.props.mapMovements.center.lat
          ],
          zoom: Number(this.props.mapMovements.zoom)
        });

        this.vtLayer = new VectorTileLayer({
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

        // window.esriMap = esriMap;
        // window.mapView = view;
        // window.VectorTileLayer = VectorTileLayer;
        // window.VTLayer = tileLyr;

        this.esri_map.add(this.vtLayer);
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
  mapMovements: PropTypes.object.isRequired
};

export default ESRIMap;
