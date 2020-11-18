import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';

const envVars = dotenv.config()
console.log("inside config", envVars);

const { PORT, NODE_ENV, mongoURL } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV || 'local' })

