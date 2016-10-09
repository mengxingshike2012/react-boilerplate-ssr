import koa from 'koa';
import api from './routes/api';

const app = new koa();

app.use(api.routes());

const port = 3000;
app.listen(port, () => console.log(`server has started on port:${port}`));
