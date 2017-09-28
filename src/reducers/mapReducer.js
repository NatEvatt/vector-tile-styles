import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function mapReducer(state = initialState.mapState, action) {
    switch(action.type) {
        case types.LOAD_MAPSTYLES_SUCCESS:{
            let newState = Object.assign({}, state);
            newState['mapStyles'] = action.mapStyles;
            return newState;
        }

        case types.TRACK_MAP_MOVE_SUCCESS:{
            let newState = Object.assign({}, state);
            newState['mapMovements'] = action.mapMovements;
            return  newState;
        }

        default:{
            return state;
        }
    }
}
