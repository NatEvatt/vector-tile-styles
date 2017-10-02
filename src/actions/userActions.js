import * as types from './actionTypes';

export function loadUserDataSuccess(userData){
    return { type: types.SAVE_USER_DATA_SUCCESS, userData};
}

export function loadUserData(userData){
    return function(dispatch) {
        dispatch(loadUserDataSuccess(userData));
    };
}
