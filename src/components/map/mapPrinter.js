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
          style={{ display: this.props.mapPrinterState.printZoomVisible }}
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
          <table className="map-printer-table">
            <tr>
              <td>Retina</td>
              <td>
                <input
                  type="radio"
                  name="retinaRadio"
                  value="no"
                  onChange={e => {
                    this.props.retinaOnChange(e);
                  }}
                />{" "}
                No
              </td>
              <td>
                <input
                  type="radio"
                  name="retinaRadio"
                  value="yes"
                  onChange={e => {
                    this.props.retinaOnChange(e);
                  }}
                />{" "}
                Yes
              </td>
            </tr>
            <tr>
              <td>Pixel Count</td>
              <td>
                <input
                  type="radio"
                  name="pixelRadio"
                  value="256"
                  onChange={e => {
                    this.props.pixelCountOnChange(e);
                  }}
                />256
              </td>
              <td>
                <input
                  type="radio"
                  name="pixelRadio"
                  value="512"
                  onChange={e => {
                    this.props.pixelCountOnChange(e);
                  }}
                />512
              </td>
            </tr>
            <tr>
              <td>Zoom</td>
              <td>{this.props.mapPrinterState.zoomUpdate}</td>
              <td>{this.props.mapPrinterState.zoom}</td>
            </tr>
            <tr>
              <td>Tiles</td>
              <td>
                {this.props.printerApiData.tiles
                  ? this.props.printerApiData.tiles[0]
                  : ""}
              </td>
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
