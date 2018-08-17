import mapboxgl from "mapbox-gl";
import React from "react";
import MapboxGeocoder from "mapbox-gl-geocoder";
import PropTypes from "prop-types";
import Config from "../../config";
import MapPrinter from "./mapPrinter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MapActions from "../../actions/mapActions";
import * as ButtonStateActions from "../../actions/buttonStateActions";
import * as MapPrinterActions from "../../actions/mapPrinterActions";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mapMovements: this.props.mapMovements,
      mapPrinterState: {
        printExtentVisible: "none",
        printZoomVisible: "none",
        printFinalizeVisible: "none",
        zoom: "",
        zoomUpdate: "",
        extent: "",
        mapStyle: this.props.style
      }
    };

    this.mapboxMap;

    this.updateMapbox = this.updateMapbox.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.selectExtentOnClick = this.selectExtentOnClick.bind(this);
    this.selectZoomOnClick = this.selectZoomOnClick.bind(this);
    this.printImageOnClick = this.printImageOnClick.bind(this);
    this.printCancelOnClick = this.printCancelOnClick.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken = Config.mapboxToken;
    if (!mapboxgl.supported()) {
      // console.log('WARNING: Your browser is not officailly supported by Mapbox GL');
    }
    this.mapboxMap = new mapboxgl.Map({
      container: this.container,
      style: this.props.style,
      center: [-122.010406, 36.964643],
      zoom: 3,
      hash: true
    });
    this.mapboxMap.addControl(
      new MapboxGeocoder({ accessToken: mapboxgl.accessToken }),
      "top-left"
    );
    this.mapboxMap.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    this.setState({ active: true });
    this.mapboxMap.on("moveend", this.handleMove);
  }

  componentWillReceiveProps = newProps => {
    if (this.mapboxMap && this.props.style !== newProps.style) {
      this.updateMapbox(newProps);
    }
    if (
      this.state.mapPrinterState.printExtentVisible !==
      newProps.printExtentVisible
    ) {
      let mapPrinterState = { ...this.state.mapPrinterState };
      mapPrinterState.printExtentVisible = newProps.printExtentVisible;
      this.setState({ mapPrinterState });
    }
  };

  updateMapbox = newProps => {
    this.mapboxMap.setStyle(newProps.style);
    this.mapboxMap.flyTo({
      center: newProps.center,
      zoom: Number(newProps.zoom)
    });
  };

  handleMove() {
    let currentZoom = this.mapboxMap.getZoom().toPrecision(3);
    let mapMovements = {
      zoom: parseFloat(),
      center: this.mapboxMap.getCenter(currentZoom),
      pitch: Math.floor(this.mapboxMap.getPitch()),
      bearing: Math.floor(this.mapboxMap.getBearing())
    };
    this.handleZoomUpdate(currentZoom);
  }

  handleZoomUpdate(currentZoom) {
    if (this.state.mapPrinterState.zoomUpdate !== currentZoom) {
      this.setState(
        prevState => ({
          mapPrinterState: {
            ...prevState.mapPrinterState,
            zoomUpdate: parseFloat(this.mapboxMap.getZoom().toPrecision(3))
          }
        }),
        () => {
          if (this.state.mapPrinterState.extent !== "") {
            this.props.actions.getTileInfo(this.state.mapPrinterState);
          }
        }
      );
    }
    this.props.actions.trackMapMovement(mapMovements);
  }

  cleanStyle(style) {
    let nameAndStyleId = style.split("//styles/")[1].split("/");
    let cleanStyle = {
      userName: nameAndStyleId[0],
      styleId: nameAndStyleId[1]
    };
    return cleanStyle;
  }

  selectExtentOnClick() {
    this.setState(prevState => ({
      mapPrinterState: {
        ...prevState.mapPrinterState,
        printZoomVisible: "block",
        extent: this.cleanBounds(this.mapboxMap.getBounds()),
        mapStyle: this.cleanStyle(this.props.style)
      }
    }));
  }

  selectZoomOnClick() {
    this.setState(
      prevState => ({
        mapPrinterState: {
          ...prevState.mapPrinterState,
          printFinalizeVisible: "block",
          zoom: this.mapboxMap.getZoom().toPrecision(3)
        }
      }),
      () => this.props.actions.getTileInfo(this.state.mapPrinterState)
    );
  }

  cleanBounds(bounds) {
    let cleanBounds = {
      top_left_lat: bounds._ne.lat,
      top_left_lon: bounds._sw.lng,
      bottom_right_lat: bounds._sw.lat,
      bottom_right_lon: bounds._ne.lng
    };
    return cleanBounds;
  }

  printCancelOnClick() {
    this.props.actions.togglePrinterButtonExtent();
    this.setState(prevState => ({
      mapPrinterState: {//here
        ...prevState.mapPrinterState,
        printZoomVisible: "none",
        printFinalizeVisible: "none",
        zoom: "",
        extent: ""
      }
    }));
    this.props.actions.clearPrinterData()
  }

  printImageOnClick() {
    this.printCancelOnClick();
    this.props.actions.printImage(this.state.mapPrinterState);
    this.setState(prevState => ({
      mapPrinterState: {
        ...prevState.mapPrinterState,
        printFinalizeVisible: "none",
        zoom: "",
        extent: ""
      }
    }));
  }

  render() {
    return (
      <div>
        <div
          style={this.props.containerStyle}
          className={this.props.hidden}
          ref={mapDiv => {
            this.container = mapDiv;
          }}
        />
        <MapPrinter
          selectExtentOnClick={this.selectExtentOnClick}
          selectZoomOnClick={this.selectZoomOnClick}
          printImageOnClick={this.printImageOnClick}
          printCancelOnClick={this.printCancelOnClick}
          mapPrinterState={this.state.mapPrinterState}
          printerApiData={this.props.mapPrinter}
          buttonState={this.props.buttonState}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mapState: state.mapState,
    userData: state.user,
    mapPrinter: state.mapPrinter,
    buttonState: state.buttonState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, MapPrinterActions, MapActions, ButtonStateActions),
      dispatch
    )
  };
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  hidden: PropTypes.string.isRequired,
  containerStyle: PropTypes.object.isRequired,
  style: PropTypes.string.isRequired,
  mapMovements: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
