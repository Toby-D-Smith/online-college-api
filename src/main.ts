import config from 'config';
import app from './app';

const port = config.get('api.expressPort');

const server = app.listen(port, () => console.log(`App running on port: ${port}`));
server.on('error', console.error);
