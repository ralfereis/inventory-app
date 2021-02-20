import express from 'express';

const app = express();
app.get('/', (request, response) => {
  return response.json({ message: 'Setting the devlopment environment' });
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🖥 Server started on port 3333!');
});
