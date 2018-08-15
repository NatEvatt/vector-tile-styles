import * as types from './actionTypes';

export function toggleLoginButtonsSuccess(){
    return { type: types.TOGGLE_LOGIN_BUTTONS_SUCCESS };
}

export function loadButtonStateSuccess(){
    return { type: types.LOAD_BUTTON_STATE_SUCCESS };
}

export function togglePrinterButtonExtentSuccess(){
    return { type: types.TOGGLE_PRINTER_BUTTON_EXTENT_SUCCESS };
}

export function toggleLoginButtons(){
    return function(dispatch) {
        dispatch(toggleLoginButtonsSuccess());
    };
}

export function togglePrinterButtonExtent(){
    return function(dispatch) {
        dispatch(togglePrinterButtonExtentSuccess());
    };
}

export function loadButtonState(){
    return function(dispatch) {
        dispatch(loadButtonStateSuccess());
    };
}
