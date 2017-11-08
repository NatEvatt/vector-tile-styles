import Congfig from "../config";

class UploadApi {
  static uploadImage(formData, token, mapStyle) {
    return fetch(
      Congfig.apiRoot +
        "vts-api/public/" +
        mapStyle.id +
        "/upload_image/" +
        mapStyle.name,
      {
        method: "POST",
        body: formData,
        cache: false,
        contentType: false,
        processData: false,
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }

  static getImage(token) {
    debugger;
    return fetch(
      Congfig.apiRoot +
        "vts-api/public/getPreview/bmp_Coolio_map_Style/thumbs/mapIcon.png",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      });
  }
}

export default UploadApi;
