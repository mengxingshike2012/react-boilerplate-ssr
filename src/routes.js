import React from 'react';
import {Router, Route} from 'react-router';
import V2exHotTopics from 'containers/index';
import V2exTopicDetail from 'containers/detail';

export default history => (
  <Router history={history}>
    <Route path="/" component={V2exHotTopics} />
    <Route path="/topic/:id" component={V2exTopicDetail} />
  </Router>
)
