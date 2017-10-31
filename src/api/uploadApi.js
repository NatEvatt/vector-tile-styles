import Congfig from "../config";

class UploadApi {
  static uploadImage(formData, token) {
    return fetch(Congfig.apiRoot + "vts-api/public/upload_image", {
      method: "POST",
      body: formData,
      cache: false,
      contentType: false,
      processData: false,
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

export default UploadApi;
