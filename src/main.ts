import express from 'express';
import config from 'config';
import { courses } from './routes/course';
import { collections } from './routes/collection';
import { authentication } from './routes/authentication';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(courses);
app.use(collections);
app.use(authentication);

const port = config.get('api.expressPort');

const server = app.listen(port, () => console.log(`App running on port: ${port}`));
server.on('error', console.error);
