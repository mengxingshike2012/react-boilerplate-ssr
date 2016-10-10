import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from 'store/configureStore';
import createRoutes from './routes';

const store = configure();
const history = syncHistoryWithStore(hashHistory, store);

export default class Root extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        {createRoutes(history)}
      </Provider>
    );
  }
}
