import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ButtonStateReducer(state = initialState.buttonDisplay, action) {
    switch(action.type) {
        case types.LOAD_BUTTON_STATE_SUCCESS:{
            return initialState.buttonDisplay;
        }

        case types.TOGGLE_LOGIN_BUTTONS_SUCCESS:{
            let newState = Object.assign({}, state);
            newState['loginVisible'] = (newState.loginVisible == "block") ? "none" : "block";
            newState['logoutVisible'] = (newState.logoutVisible == "block") ? "none" : "block";
            return newState;
        }

        default:{
            return state;
        }
    }
}
