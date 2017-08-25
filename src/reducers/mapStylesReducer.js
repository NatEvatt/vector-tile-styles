import * as types from '../actions/actionTypes';

export default function mapStylesReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_MAPSTYLES_SUCCESS:
      return action.mapStyles;

    default:
      return state;
  }
}
