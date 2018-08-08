import Congfig from "../config";

class PrinterApi {
  static getTileInfo(mapPrinterState, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/get_tile_info", {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        zoom: mapPrinterState.zoom,
        top_left_lat: mapPrinterState.extent.top_left_lat,
        top_left_lon: mapPrinterState.extent.top_left_lon,
        bottom_right_lat: mapPrinterState.extent.bottom_right_lat,
        bottom_right_lon: mapPrinterState.extent.bottom_right_lon
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }

  static printImage(mapPrinterState, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/print-image", {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        zoom: mapPrinterState.zoom,
        top_left_lat: mapPrinterState.extent.top_left_lat,
        top_left_lon: mapPrinterState.extent.top_left_lon,
        bottom_right_lat: mapPrinterState.extent.bottom_right_lat,
        bottom_right_lon: mapPrinterState.extent.bottom_right_lon
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }
}

export default PrinterApi;
