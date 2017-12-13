import * as types from "./actionTypes";
import UploadApi from "../api/uploadApi";

export function uploadImageSuccess(newStyle) {
  return { type: types.SAVE_NEW_STYLE_SUCCESS, newStyle };
}

export function uploadImage(files, mapStyle) {
  let formData = new FormData();

  if (files && files.length) {
    formData.append("photo-" + 0, files[0]);

    return function(dispatch, getState) {
        debugger;
      let state = getState();
      let token = state.user.id_token;
      return UploadApi.uploadImage(formData, token, mapStyle)
        .then(list => {
          return list[0];
        })
        .catch(error => {
          throw error;
        });
    };
  }
}
