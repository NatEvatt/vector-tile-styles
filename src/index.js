import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import configureStore from './store/configureStore';
// import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.scss';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
