// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import MapStyles from './mapReducer';
 import User from './userReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   mapState: MapStyles,
   user: User
 });

 export default rootReducer;
