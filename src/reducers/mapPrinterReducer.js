import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function printerReducer(state = initialState.mapPrinter, action) {
  switch (action.type) {
    case types.GET_TILE_INFO_SUCCESS: {
      let newState = Object.assign({}, state);
      newState["tiles"] = action.printerTileInfo.tile_count;
      newState["pixels"] = action.printerTileInfo.pixel_count;
      return newState;
    }

    default: {
      return state;
    }
  }
}
