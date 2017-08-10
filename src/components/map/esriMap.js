import React, { Component } from 'react';
import './map.css';
import { dojoRequire } from 'esri-loader';
import EsriLoader from 'esri-loader-react';

class App extends Component {

  //
  // componentWillReceiveProps = function(){
  //   // debugger;
  //   console.log(this.props.esriUrl);
  // }

  createMap = () => {

    dojoRequire(['esri/Map', 'esri/views/MapView', "esri/layers/VectorTileLayer", "esri/widgets/Search"], (Map, MapView, VectorTileLayer, Search) => {

      let esriMap = new Map();

      let view = new MapView({
        container: this.mapContainer,
        map: esriMap,
        center: this.props.center,
        zoom: this.props.zoom
      });

      let tileLyr = new VectorTileLayer({
        url: "http://www.arcgis.com/sharing/rest/content/items/95d4d6b61c0b4690adaf8cbdabb28196/resources/styles/root.json"
        // url: this.props.esriUrl
      });

      var searchWidget = new Search({
        view: view
      });

      view.ui.move([ "zoom"], "bottom-right");

      view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
      });

      window.esriMap = esriMap;
      window.VectorTileLayer = VectorTileLayer;
      // window.VTLayer = tileLyr;

      esriMap.add(tileLyr);
    });

  }

  render() {

    const options = {
      url: 'https://js.arcgis.com/4.4/'
    };

    return (
      <div className={`App ${this.props.hidden}`}>
        <EsriLoader options={options} ready={this.createMap} />
        <div
          style={ this.props.containerStyle }
          ref={node => this.mapContainer = node}
          className="map-view">
        </div>
      </div>
    );
  }
}

export default App;
