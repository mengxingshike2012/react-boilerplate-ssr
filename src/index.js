import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from 'store/configureStore';
import V2exHotTopics from 'containers/index';
import V2exTopicDetail from 'containers/detail';

const store = configure(window.__initState__);
const history = syncHistoryWithStore(browserHistory, store);
import createRoutes from './routes';

history.listen(location => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    {createRoutes(history)}
  </Provider>,
  document.getElementById('root')
);
