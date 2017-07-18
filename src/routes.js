import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import MapPage from './components/map/mapPage';
import HomePage from './components/home/homePage';
import NotFoundPage from './components/notFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="map" component={MapPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
