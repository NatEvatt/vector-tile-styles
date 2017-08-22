import * as types from './actionTypes';
import mapStylesApi from '../api/mapStylesApi';

export function loadMapStylesSuccess(mapStyles){
  return { type: types.LOAD_MAPSTYLES_SUCCESS, mapStyles}
}

export function loadMapStyles(){
  return function(dispatch) {
    return mapStylesApi.getMapStyles().then(mapStyles => {
      dispatch(loadMapStylesSuccess(mapStyles))
    }).catch(error => {
      throw(error);
    })
  }
}
