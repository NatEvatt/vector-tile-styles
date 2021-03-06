import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function UserReducer(state = initialState.user, action) {
    switch(action.type) {
        case types.SAVE_USER_DATA_SUCCESS:{
            return action.userData;
        }

        case types.CLEAR_USER_DATA_SUCCESS:{
            return initialState.user;
        }

        default:{
            return state;
        }
    }
}
