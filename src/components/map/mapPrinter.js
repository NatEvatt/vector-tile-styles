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
          style={{display: this.props.buttonState.printExtentVisible}}
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

          <p>Your map is going to be {this.props.printerApiData.pixels ? this.props.printerApiData.pixels[0] : ''}
          by { this.props.printerApiData.pixels ? this.props.printerApiData.pixels[1] : ''} pixels
          and { this.props.printerApiData.tiles ? this.props.printerApiData.tiles[0] : '' } by
          { this.props.printerApiData.tiles ? this.props.printerApiData.tiles[1] : '' } tiles.
          Are you sure that you want to print?</p>
        </div>
      </div>
    );
  }
}

MapPrinter.propTypes = {
  selectExtentOnClick: PropTypes.func.isRequired,
  selectZoomOnClick: PropTypes.func.isRequired,
  printImageOnClick: PropTypes.func.isRequired
};

export default MapPrinter;
