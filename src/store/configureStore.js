import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from 'reducers/index';
import rootSaga from 'sagas';

export default function configure(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(
    routerMiddleware(hashHistory),
    sagaMiddleware,
    createLogger(),
  );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers/index.js', () => {
      const nextReducer = require('../reducers/index.js');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
