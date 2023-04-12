import express from 'express';
import config from 'config';

const app = express();

const port = config.get('api.expressPort');

const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
server.on('error', console.error);
