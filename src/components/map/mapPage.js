import React, { Component } from 'react';
// import ReactMap from "react-mapbox-gl";
import MapStyles from './mapStyles';
import Dark_Matter from './mapStyles/dark_matter';
import SecondHeader from '../home/secondHeader';
import FirstHeader from '../home/firstHeader';
import JsonStyleVierwer from '../styleViewer/jsonStyleViewer';
import Overlay from '../home/overlay';
import Map from './map';
import JsonDisplayHelper from '../utils/jsonDisplayHelper';

const accessToken = "pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A";

export default class MapPage extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      currentStyleOptions: [],
      currentStyle: Dark_Matter,
      currentStyleName: "Dark Matter",
      height: (window.innerHeight - 83) + 'px',
      width: window.innerWidth + 'px',
      mapStyle: MapStyles,
      overlayClass: "overlay",
      zoom: 11,
      jsonStyleClass: "jsonStyleViewer close",
      styleJsonStringified:""
    };

    this.updateMapStyle = this.updateMapStyle.bind(this);
    this.styleReturned = this.styleReturned.bind(this);
    this.closeOptions = this.closeOptions.bind(this);
    this.closeJsonStyleViewer = this.closeJsonStyleViewer.bind(this);
    this.jsonStyleOnclick = this.jsonStyleOnclick.bind(this);
    this.openOptions = this.openOptions.bind(this);
  }

  componentDidMount(){
    // map.setStyle(Dark_Matter);
    // map.setStyle("mapbox://styles/mapbox/streets-v9");
    this.updateMapStyle("Dark Matter");
  }

  styleReturned(results){
    this.setState({
      currentStyle: results.data,
    });
  }

  getStyleObjectOrString(styleName){
    let thisStyle = MapStyles.filter(style => style.name == styleName)[0];
    let styleStringOrObject = (thisStyle.type == "Mapbox_Remote") ? thisStyle.url : require('./mapStyles/' + thisStyle.jsonStyle + '.json')
    return Array(styleStringOrObject, thisStyle);
  }

  closeOptions(){
    this.setState({
      overlayClass: "overlay close"
    });
  }

  openOptions(){
    this.setState({
      overlayClass: "overlay open"
    });
  }

  jsonStyleOnclick(style){
    let styleStringOrObject = this.getStyleObjectOrString(style)[0];
    let styleJsonStringified = JSON.stringify(styleStringOrObject, null, 2);
    let prettyJsonStyle = JsonDisplayHelper.syntaxHighlight(styleJsonStringified);
    this.setState({
      jsonStyleClass: "open",
      styleJsonStringified: styleJsonStringified
    });
  }

  closeJsonStyleViewer(){
    this.setState({
      jsonStyleClass: "close"
    });
  }

  updateMapStyle(mapStyle) {
    let styleStringOrObject = this.getStyleObjectOrString(mapStyle);
    let styleArray = styleStringOrObject[0];
    let currentStyleOptions = styleStringOrObject[1];
    // debugger;
    map.setStyle(styleArray);
    map.flyTo({center: [151.217572, -33.898142], zoom: 13, curve: 1, easing(t) {
        return t;
      }
    });
    this.setState({
      currentStyle: styleArray,
      currentStyleOptions: currentStyleOptions,
      zoom: 12
    });
  }

  render() {

    const containerStyle = {
      height: this.state.height,
      width: this.state.width
    };
    return (
      <div>
        <Overlay
          onClick={this.closeOptions}
          overlayClass={this.state.overlayClass}
          updateMapStyle={this.updateMapStyle}
          mapStyles={MapStyles}/>
        <FirstHeader />
        <SecondHeader
          currentStyleOptions={this.state.currentStyleOptions}
          mapStyles={MapStyles}
          onChange={this.updateMapStyle}
          openOptions={this.openOptions}
          jsonStyleOnclick={this.jsonStyleOnclick}
          />

        <JsonStyleVierwer
          closeJsonStyleViewer={this.closeJsonStyleViewer}
          jsonStyleClass={this.state.jsonStyleClass}
          styleJsonStringified={this.state.styleJsonStringified}
          >
        </JsonStyleVierwer>

        <Map
          style={this.state.currentStyle}
          center={[-122.010406, 36.964643]}
          accessToken={accessToken}
          zoom={this.state.zoom}
          containerStyle={containerStyle}>
        </Map>

      </div>

    );
  }
}
