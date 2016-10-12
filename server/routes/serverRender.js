import Router from 'koa-router';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../../src/store/configureStore';
import createRoutes from '../../src/routes';

const serverRender = new Router();

function getReduxPromise(props, store) {
  const comp = props.components[props.components.length - 1].WrappedComponent;
  return comp.loadData ?
    comp.loadData({store, props}) :
    Promise.resolve();
}
function _match(location) {
  return new Promise((resolve, reject) => {
    match(location, (error, redirectionLocation, renderProps) => {
      if (error) {
        return reject(error);
      }
      resolve({redirectionLocation, renderProps});
    })
  })
}

serverRender.all('*', async (ctx) => {
  const store = configureStore();
  const history = createMemoryHistory();
  const routes = createRoutes(history);

  try {
    const {redirectionLocation, renderProps} = await _match({routes, location: ctx.url});
    if (renderProps) {
      // 这是有问题的， 因为action 是有关联的, request, success, failure
      const result = await getReduxPromise(renderProps, store);

      const reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c');
      const html = ReactDOMServer.renderToString(
          <Provider store={store}>
            {<RouterContext {...renderProps} />}
          </Provider>
      );
      await ctx.render('index', {html, reduxState});
    }
  } catch (e) {
    console.log(e);
  }
})

export default serverRender;
