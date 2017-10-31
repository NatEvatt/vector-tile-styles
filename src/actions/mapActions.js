import * as types from './actionTypes';
import mapStylesApi from '../api/mapStylesApi';

export function loadMapStylesSuccess(mapStyles){
    return { type: types.LOAD_MAPSTYLES_SUCCESS, mapStyles};
}

export function trackMapMovementSuccess(mapMovements){
    return { type: types.TRACK_MAP_MOVE_SUCCESS, mapMovements};
}

export function saveNewStyleSuccess(newStyle){
    return { type: types.SAVE_NEW_STYLE_SUCCESS, newStyle};
}

export function loadMapStyles(){
    return function(dispatch, getState) {
        let state = getState();
        let token = (state.user) ? state.user.id_token : false;
        let equation = mapStylesApi.getMapStylesToken(token);
        return equation.then(mapStyles => {
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

export function saveNewStyle(newStyle){
    return function(dispatch, getState) {
        let state = getState();
        let token = state.user.id_token;
        return mapStylesApi.saveNewMapStyle(newStyle, token).then(id => {
            newStyle['id'] = id;
            dispatch(saveNewStyleSuccess(newStyle));
        }).catch(error => {
            throw(error);
        });
    };
}
