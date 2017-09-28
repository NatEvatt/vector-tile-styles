import * as types from './actionTypes';
import mapStylesApi from '../api/mapStylesApi';

export function loadMapStylesSuccess(mapStyles){
  return { type: types.LOAD_MAPSTYLES_SUCCESS, mapStyles};
}

export function trackMapMovementSuccess(mapMovements){
  return { type: types.TRACK_MAP_MOVE_SUCCESS, mapMovements};
}

export function loadMapStyles(){
  return function(dispatch) {
    return mapStylesApi.getMapStyles().then(mapStyles => {
      dispatch(loadMapStylesSuccess(mapStyles));
    }).catch(error => {
      throw(error);
    });
  };
}

export function trackMapMovement(mapMovements){
  return function(dispatch) {
      dispatch(trackMapMovementSuccess(mapMovements));
  };
}
