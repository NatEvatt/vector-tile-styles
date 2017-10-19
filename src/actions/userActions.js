import * as types from './actionTypes';

export function loadUserDataSuccess(userData){
    return { type: types.SAVE_USER_DATA_SUCCESS, userData };
}

export function clearUserDataSuccess(){
    return { type: types.CLEAR_USER_DATA_SUCCESS };
}

export function loadUserData(userData){
    return function(dispatch) {
        dispatch(loadUserDataSuccess(userData));
    };
}

export function clearUserData(){
    return function(dispatch) {
        dispatch(clearUserDataSuccess());
    };
}
