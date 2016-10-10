import Router from 'koa-router';
import fetch from 'isomorphic-fetch';

const api = new Router({
  prefix: '/api'
});

const hostname = 'https://www.v2ex.com';
const result = {
  data: 'This is a Api page',
}
api
  .get('/test', ctx => {
    ctx.body = result;
  })
  .get('/topics/hot.json', async ctx => {
    const path = ctx.url.replace('/\/api/', '');
    const data = await fetch(hostname+path).then(res => res.json());
    ctx.body = data;
  })
  .get('/topics/:id', async ctx => {
    const path = ctx.url.replace('/\/api/', '');
    const data = await fetch(hostname+'/topics/show?id='+ctx.params.id).then(res => res.json());
    ctx.body = data;
  });

export default api;
