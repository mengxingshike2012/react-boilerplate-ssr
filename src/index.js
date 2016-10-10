// this file is not used in ssr,
// it is copied from react-boilerplate
// compared it with root.js to learn better of ssr

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configure from 'store/configureStore';
import V2exHotTopics from 'containers/index';
import V2exTopicDetail from 'containers/detail';

const store = configure();
const history = syncHistoryWithStore(hashHistory, store);

history.listen(location => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={V2exHotTopics} />
      <Route path="/topic/:id" component={V2exTopicDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
