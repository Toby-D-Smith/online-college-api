import express from 'express';
import { courses } from './routes/course';
import { collections } from './routes/collection';
import { authentication } from './routes/authentication';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(courses);
app.use(collections);
app.use(authentication);

export default app;
