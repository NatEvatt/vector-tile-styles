import * as types from "./actionTypes";
import UploadApi from "../api/uploadApi";

export function uploadImageSuccess(newStyle) {
  return { type: types.SAVE_NEW_STYLE_SUCCESS, newStyle };
}

export function uploadImage(files, mapStyle) {
  var formData = new FormData();
  var list, i;

  if (files && files.length) {
    // for (i = 0; i < files.length; i++) {
    //   formData.append("photo-" + i, files[i]);
    // }
    formData.append("photo-" + 0, files[0]);
    let thisFormData = formData;

    return function(dispatch, getState) {
      let state = getState();
      let token = state.user.id_token;
      debugger;
      return UploadApi.uploadImage(formData, token, mapStyle)
        .then(id => {
            debugger;
            return UploadApi.getImage(token).then(function(){
                console.log('hi there');
            })
        //   newStyle["id"] = id;
          dispatch(uploadImageSuccess(newStyle));
        })
        .catch(error => {
          throw error;
        });
    };
  }
}
