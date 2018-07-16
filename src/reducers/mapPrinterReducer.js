import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function printerReducer(state = initialState.mapPrinter, action) {
  switch (action.type) {
    case types.GET_TILE_INFO_SUCCESS: {
      let newState = Object.assign({}, state);
      newState["tiles"] = action.printerTileInfo[0];
      newState["pixels"] = action.mapStyles[1];
      return newState;
    }

    default: {
      return state;
    }
  }
}
