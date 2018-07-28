import React from "react";
import PropTypes from "prop-types";

class MapPrinter extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="map-printer">
        <button
          className="myButtons"
          onClick={() => this.props.selectExtentOnClick()}
          style={{display: this.props.mapPrinterState.printExtentVisible}}
        >
          Select Map Extent
        </button>

        <button
          className="myButtons"
          onClick={() => this.props.selectZoomOnClick()}
          style={{display: this.props.mapPrinterState.printZoomVisible}}
        >
          Select Map Zoom
        </button>

        <button
          className="myButtons"
          onClick={() => this.props.printCancelOnClick()}
          style={{display: this.props.mapPrinterState.printFinalizeVisible}}
        >
          Cancel
        </button>
        <button
          className="myButtons"
          onClick={() => this.props.printImageOnClick()}
          style={{display: this.props.mapPrinterState.printFinalizeVisible}}
        >
          Print Image
        </button>
        <div
          className="map-printer-comments"
          style={{display: this.props.mapPrinterState.printFinalizeVisible}} >
          <p>Your map is going to be { this.props.printerApiData.pixels } pixels and { this.props.printerApiData.tiles } tiles.
          Are you sure that you want to print?</p>
        </div>
      </div>
    );
  }
}

MapPrinter.propTypes = {
  selectExtentOnClick: PropTypes.func.isRequired,
  selectZoomOnClick: PropTypes.func.isRequired
};

export default MapPrinter;
