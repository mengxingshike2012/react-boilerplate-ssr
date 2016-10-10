import 'babel-polyfill';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import views from 'koa-views';
import convert from 'koa-convert';
import serve from 'koa-static';

import path from 'path';

import api from './routes/api';
import serverRender from './routes/serverRender';

const app = new koa();

app.use(bodyParser());

app.use(json());

// koa-static not support koa2, use koa-convert for help
app.use(convert(serve(path.join(__dirname, '../dist'))));

app.use(views(path.join(__dirname, '../src'), {extension: 'ejs'}));

app.use(api.routes());

app.use(serverRender.routes());

const port = 3000;
app.listen(port, () => console.log(`server has started on port:${port}`));
