// 使用babel 实现async/await, 需要此polyfill, 否则会报错: e.g. func not defined
import 'babel-polyfill';

import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import views from 'koa-views';
// change koa1 to koa2
import convert from 'koa-convert';
// serve static files
import serve from 'koa-static';
// 如果使用了webpack __dirname会被修改 需正确设置，见 webpack.config
import path from 'path';

import api from './routes/api';
import serverRender from './routes/serverRender';

const app = new koa();

app.use(bodyParser());
// pretty json
app.use(json());
// 设置静态模板位置
app.use(views(path.join(__dirname, '../src'), {extension: 'ejs'}));
// koa-static not support koa2, use koa-convert for help
app.use(convert(serve(path.join(__dirname, '../dist'))));

app.use(api.routes());

app.use(serverRender.routes());

const port = 3000;
app.listen(port, () => console.log(`server has started on port:${port}`));
