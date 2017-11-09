import * as types from "./actionTypes";
import UploadApi from "../api/uploadApi";

export function uploadImageSuccess(newStyle) {
  return { type: types.SAVE_NEW_STYLE_SUCCESS, newStyle };
}

export function uploadImage(files, mapStyle) {
  var formData = new FormData();
  var list, i;

  if (files && files.length) {
    formData.append("photo-" + 0, files[0]);
    let thisFormData = formData;

    return function(dispatch, getState) {
      let state = getState();
      let token = state.user.id_token;
      return UploadApi.uploadImage(formData, token, mapStyle)
        .then(list => {
            debugger;
        //   dispatch(uploadImageSuccess(newStyle));
          return list[0];
        })
        .catch(error => {
          throw error;
        });
    };
  }
}

export function downloadImage(downloadLink){
    debugger;
    console.log(downloadLink);
}
