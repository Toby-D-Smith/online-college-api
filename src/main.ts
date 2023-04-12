import express from 'express';
import config from 'config';
import { courses } from './routes/course';
import { collections } from './routes/collections';

const app = express();

app.use(courses);
app.use(collections);
const port = config.get('api.expressPort');

const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
server.on('error', console.error);
