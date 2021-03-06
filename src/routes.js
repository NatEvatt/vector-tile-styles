import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import MapPage from './components/map/mapPage';
import ESRIMapPage from './components/map/esriMapPage';
// import HomePage from './components/home/homePage';
import NotFoundPage from './components/notFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MapPage}/>
    <Route path="map" component={MapPage}/>
    <Route path="esri-map" component={ESRIMapPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
