import Server from './server';
import config from './config/configuration';

console.log("config is ",  config)

const server =new Server ({PORT : config.PORT});

server.bootstrap().run()
