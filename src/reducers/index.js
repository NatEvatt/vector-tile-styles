// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import mapStyles from './mapStylesReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   mapStyles
 });

 export default rootReducer;
