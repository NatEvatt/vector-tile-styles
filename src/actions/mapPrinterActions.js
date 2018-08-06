import * as types from './actionTypes';
import MapPrinterApi from '../api/mapPrinterApi'

export function getTileInfoSuccess(printerTileInfo){
    return { type: types.GET_TILE_INFO_SUCCESS, printerTileInfo };
}

export function getTileInfo(mapPrinterState){
    return function(dispatch, getState) {
        let state = getState();
        let token = state.user.id_token;
        let tileInfo = MapPrinterApi.getTileInfo(mapPrinterState, token);
        return tileInfo.then(printerTileInfo => {
            dispatch(getTileInfoSuccess(printerTileInfo));
        }).catch(error => {
            throw(error);
        });
    };
}
