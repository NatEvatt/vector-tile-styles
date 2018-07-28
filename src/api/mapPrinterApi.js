import Congfig from "../config";

class PrinterApi {
  static getTileInfo() {
    return fetch(Congfig.apiRoot + "vts-api/public/get_tile_info")
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
