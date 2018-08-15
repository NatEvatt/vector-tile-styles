import React, { Component } from "react";
import SecondHeader from "../home/secondHeader";
import FirstHeader from "../home/firstHeader";
import JsonStyleVierwer from "../styleViewer/jsonStyleViewer";
import Overlay from "../home/overlay";
import ESRIMap from "./esriMap";
import Map from "./map";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mapActions from "../../actions/mapActions";
import * as ButtonStateActions from "../../actions/buttonStateActions";
import PropTypes from "prop-types";
import Config from "../../config";
import { Helmet } from "react-helmet";
import HelmetData from "../home/helmetData";
// import JsonDisplayHelper from '../utils/jsonDisplayHelper';

const accessToken = Config.mapboxToken;

class MapPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentStyleOptions: {
        name: "Mapbox Light",
        url: "mapbox://styles/mapbox/light-v9",
        type: "Mapbox_Remote",
        author: "Mapbox",
        image:
          "https://api.mapbox.com/styles/v1/mapbox/light-v9/static/-70.878491,6.049648,4.41,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
      }, //here
      currentStyle: "mapbox://styles/mapbox/light-v9",
      height: window.innerHeight - 100 + "px",
      width: window.innerWidth - 2 + "px",
      overlayClass: "overlay open",
      zoom: 11,
      jsonStyleClass: "jsonStyleViewer close",
      styleJsonStringified: "",
      mapboxHidden: "",
      esriHidden: "hidden",
      esriUrl:
        "http://www.arcgis.com/sharing/rest/content/items/95d4d6b61c0b4690adaf8cbdabb28196/resources/styles/root.json",
      center: {
        lng: -122.010406,
        lat: 36.964643
      },
      printExtentVisible: "none"
    };

    this.updateMapStyle = this.updateMapStyle.bind(this);
    this.closeOptions = this.closeOptions.bind(this);
    this.closeJsonStyleViewer = this.closeJsonStyleViewer.bind(this);
    this.jsonStyleOnclick = this.jsonStyleOnclick.bind(this);
    this.openOptions = this.openOptions.bind(this);
    this.startPrinterOnClick = this.startPrinterOnClick.bind(this);
    // this.handleMove = this.handleMove.bind(this);
  }

  getStyleObjectOrString(styleName) {
    let thisStyle = this.props.mapState.mapStyles.filter(
      style => style.name == styleName
    )[0];
    let styleStringOrObject =
      thisStyle.type == "Mapbox_Remote"
        ? thisStyle.url
        : thisStyle.type == "ESRI"
          ? thisStyle.url
          : require("./mapStyles/" + thisStyle.jsonStyle + ".json");

    // let styleStringOrObject = (thisStyle.type == "Mapbox_Remote") ? thisStyle.url : require('./mapStyles/' + thisStyle.jsonStyle + '.json')
    return Array(styleStringOrObject, thisStyle);
  }

  closeOptions() {
    this.setState({
      overlayClass: "overlay close"
    });
  }

  openOptions() {
    this.setState({
      overlayClass: "overlay open"
    });
  }

  jsonStyleOnclick(style) {
    let styleStringOrObject = this.getStyleObjectOrString(style)[0];
    let styleJsonStringified = JSON.stringify(styleStringOrObject, null, 2);
    // let prettyJsonStyle = JsonDisplayHelper.syntaxHighlight(styleJsonStringified);
    this.setState({
      jsonStyleClass: "open",
      styleJsonStringified: styleJsonStringified
    });
  }

  closeJsonStyleViewer() {
    this.setState({
      jsonStyleClass: "close",
      styleJsonStringified: ""
    });
  }

  updateMapStyle(mapStyle) {
    let styleStringOrObject = this.getStyleObjectOrString(mapStyle);
    if (styleStringOrObject[1].type == "ESRI") {
      this.updateESRI(styleStringOrObject);
    } else {
      this.updateMapbox(styleStringOrObject);
    }
  }

  updateMapbox(styleStringOrObject) {
    let currentStyleOptions = styleStringOrObject[1];
    // map.setStyle(styleStringOrObject[0]);
    this.setState({
      currentStyle: styleStringOrObject[0],
      currentStyleOptions: currentStyleOptions,
      zoom: parseFloat(this.props.mapState.mapMovements.zoom),
      center: {
        lng: this.props.mapState.mapMovements.center.lng,
        lat: this.props.mapState.mapMovements.center.lat
      },
      esriHidden: "hidden",
      mapboxHidden: ""
    });
  }

  updateESRI(styleStringOrObject) {
    let currentStyleOptions = styleStringOrObject[1];
    this.setState({
      currentStyle: styleStringOrObject[0],
      currentStyleOptions: currentStyleOptions,
      esriUrl: styleStringOrObject[0],
      center: {
        lng: this.props.mapState.mapMovements.center.lng,
        lat: this.props.mapState.mapMovements.center.lat
      },
      zoom: parseFloat(this.props.mapState.mapMovements.zoom),
      esriHidden: "",
      mapboxHidden: "hidden"
    });
  }

  startPrinterOnClick() {
    this.props.actions.togglePrinterButtonExtent();
  }

  // handleMove() {
  //   let mapMovements = {
  //     zoom: map.getZoom().toPrecision(3),
  //     center: map.getCenter(),
  //     pitch: Math.floor(map.getPitch()),
  //     bearing: Math.floor(map.getBearing())
  //   };
  //   this.props.actions.trackMapMovement(mapMovements);
  // }

  render() {
    let mapboxContainerStyle = {
      height: this.state.height,
      width: this.state.width
    };

    let esriContainerStyle = {
      height: this.state.height,
      width: this.state.width
    };

    return (
      <div>
        <Overlay
          onClick={this.closeOptions}
          overlayClass={this.state.overlayClass}
          updateMapStyle={this.updateMapStyle}
          mapStyles={this.props.mapState.mapStyles}
        />

        <FirstHeader />

        <SecondHeader
          currentStyleOptions={this.state.currentStyleOptions}
          onChange={this.updateMapStyle}
          openOptions={this.openOptions}
          jsonStyleOnclick={this.jsonStyleOnclick}
          userData={this.props.userData}
          startPrinterOnClick={this.startPrinterOnClick}
        />

        <JsonStyleVierwer
          closeJsonStyleViewer={this.closeJsonStyleViewer}
          jsonStyleClass={this.state.jsonStyleClass}
          styleJsonStringified={this.state.styleJsonStringified}
        />

        <Map
          style={this.state.currentStyle}
          center={this.state.center}
          accessToken={accessToken}
          zoom={this.state.zoom}
          containerStyle={mapboxContainerStyle}
          hidden={this.state.mapboxHidden}
          mapMovements={this.props.mapState.mapMovements}
          printExtentVisible={this.state.printExtentVisible}
        />

        <ESRIMap
          style={this.state.currentStyle}
          center={[this.state.center.lng, this.state.center.lat]}
          accessToken={accessToken}
          zoom={this.state.zoom}
          containerStyle={esriContainerStyle}
          hidden={this.state.esriHidden}
          esriUrl={this.state.esriUrl}
          actions={this.props.actions}
        />

        <Helmet>
          <title>{HelmetData.mapPage.title}</title>
          <meta name="description" content={HelmetData.mapPage.description} />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mapState: state.mapState,
    userData: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, ButtonStateActions, mapActions),
      dispatch
    )
  };
}

MapPage.propTypes = {
  mapState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  userData: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapPage);
