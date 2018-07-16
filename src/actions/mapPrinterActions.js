import * as types from './actionTypes';
import MapPrinterApi from '../api/mapPrinterApi'

export function getTileInfoSuccess(printerTileInfo){
    return { type: types.GET_TILE_INFO_SUCCESS, printerTileInfo };
}

export function getTileInfo(){
    // return function(dispatch) {
    //     let tileInfo = MapPrinterApi.getTileInfo();
    //     return tileInfo.then(printerTileInfo => {
    //         dispatch(getTileInfoSuccess(printerTileInfo));
    //     }).catch(error => {
    //         throw(error);
    //     });
    // };
    return function(dispatch) {
        dispatch(getTileInfoSuccess("hi"));
    };
}
