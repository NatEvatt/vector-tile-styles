import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import MapPage from './components/map/mapPage';

export default (
  <Route path="/" component ={App}>
    <IndexRoute component={MapPage} />
  </Route>
);
