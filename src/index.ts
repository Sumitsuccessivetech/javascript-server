import Server from './server';
import { config } from './config';

console.log("config is ", config)

const server = new Server({ port: 9000 });

server.bootstrap().run()
