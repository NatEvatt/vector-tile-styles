import React from "react";
import PropTypes from "prop-types";

class MapPrinter extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div
        className="map-printer"
        style={{ display: this.props.buttonState.printExtentVisible }}
      >
        <button
          className="myButtons"
          onClick={() => this.props.selectExtentOnClick()}
          // style={{display: this.props.buttonState.printExtentVisible}}
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
        >
          Cancel
        </button>
        <button
          className="myButtons"
          onClick={() => this.props.printImageOnClick()}
          style={{ display: this.props.mapPrinterState.printFinalizeVisible }}
        >
          Print Image
        </button>
        <div>
          <table>
            <tr>
              <td>Zoom</td>
              <td>{this.props.mapPrinterState.zoomUpdate}</td>
              <td></td>
              <td>{this.props.mapPrinterState.zoom}</td>
            </tr>
            <tr>
              <td>Tiles</td>
              <td>
                {this.props.printerApiData.tiles
                  ? this.props.printerApiData.tiles[0]
                  : ""}
              </td>
              <td> x </td>
              <td>
                {this.props.printerApiData.tiles
                  ? this.props.printerApiData.tiles[1]
                  : ""}
              </td>
            </tr>
            <tr>
              <td>Pixels</td>
              <td>
                {this.props.printerApiData.pixels
                  ? this.props.printerApiData.pixels[0]
                  : ""}
              </td>
              <td> x </td>
              <td>
                {this.props.printerApiData.pixels
                  ? this.props.printerApiData.pixels[1]
                  : ""}
              </td>
            </tr>
          </table>
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
