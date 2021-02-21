import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🖥 Server started on port 3333!');
});
