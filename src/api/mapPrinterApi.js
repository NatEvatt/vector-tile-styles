import Congfig from "../config";

class PrinterApi {
  static getTileInfo(mapPrinterState, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/get_tile_info", {
      headers: {
        Authorization: "Bearer " + token
      },
      method: "POST",
      body: JSON.stringify({
        zoom: mapPrinterState.zoom
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }

  static temp(token) {
    return fetch(Congfig.apiRoot + "vts-api/public/get_mapstyles", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }
}

export default PrinterApi;
