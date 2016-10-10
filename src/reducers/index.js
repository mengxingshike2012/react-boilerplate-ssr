import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import v2ex from './v2ex';

export default combineReducers({
  v2ex,
  routing: routerReducer,
});
