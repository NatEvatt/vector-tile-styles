import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function mapReducer(state = initialState.mapState, action) {
  switch (action.type) {
    case types.LOAD_MAPSTYLES_SUCCESS: {
      let newState = Object.assign({}, state);
      newState["mapStyles"] = action.mapStyles;
      return newState;
    }

    case types.TRACK_MAP_MOVE_SUCCESS: {
      let newState = Object.assign({}, state);
      newState["mapMovements"] = action.mapMovements;
      return newState;
    }

    case types.SAVE_NEW_STYLE_SUCCESS: {
      let newState = Object.assign({}, state);
      let updatedMapStyles = [
        ...newState.mapStyles,
        Object.assign({}, action.newStyle)
      ];
      newState["mapStyles"] = updatedMapStyles;
      newState["newStyle"] = action.newStyle;
      return newState;
    }

    case types.DELETE_MAP_STYLE_SUCCESS: {
      let newState = Object.assign({}, state);
      let updatedMapStyles = newState.mapStyles.filter(function(mapStyle) {
        return mapStyle.id !== action.deletedStyle.id;
      });
      newState["mapStyles"] = updatedMapStyles;
      return newState;
    }

    case types.EDIT_MAP_STYLE_SUCCESS: {
      let newState = Object.assign({}, state);
      let updatedMapStyles = newState.mapStyles.map(function(mapStyle) {
        if (mapStyle.id !== action.editedStyle.id) {
          return mapStyle;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...mapStyle,
          ...action.editedStyle
        };
      });
      newState["mapStyles"] = updatedMapStyles;
      return newState;
    }

    default: {
      return state;
    }
  }
}
