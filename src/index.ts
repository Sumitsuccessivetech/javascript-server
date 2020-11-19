import Server from './server';
import { config } from './config';

const server = new Server(config);

server.bootstrap().run()
