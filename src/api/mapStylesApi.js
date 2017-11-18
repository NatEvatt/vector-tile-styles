import Congfig from "../config";

class MapStylesApi {
  static getMapStyles() {
    return fetch(Congfig.apiRoot + "vts-api/public/get_mapstyles")
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }

  static getMapStylesToken(token) {
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

  static saveNewMapStyle(newStyle, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/save_new_map_style", {
      method: "POST",
      body: JSON.stringify(newStyle),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }

  static editMapStyle(edittedStyle, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/edit_map_style", {
      method: "POST",
      body: JSON.stringify(edittedStyle),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    });
  }
}

export default MapStylesApi;
