// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import MapStyles from './mapReducer';
 import User from './userReducer';
 import ButtonState from './buttonStateReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   mapState: MapStyles,
   user: User,
   buttonState: ButtonState
 });

 export default rootReducer;
