import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './components/root';
// import {Provider} from 'react-redux';
import './styles/styles.scss';
import './styles/modalStyles.scss';
import { syncHistoryWithStore } from 'react-router-redux';
import {loadMapStyles} from './actions/mapActions';
import {loadButtonState} from './actions/buttonStateActions';
import {persistStore} from 'redux-persist';

const store = configureStore();
store.dispatch(loadButtonState());
setTimeout(function(){
    store.dispatch(loadMapStyles());
},200);

// begin periodically persisting the store
persistStore(store);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// export store;

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const NewRoot = require('./components/root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
