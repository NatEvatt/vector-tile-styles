// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {routerReducer} from 'react-router-redux';
 import mapStyles from './mapReducer';

 const rootReducer = combineReducers({
   routing: routerReducer,
   mapState: mapStyles
 });

 export default rootReducer;
