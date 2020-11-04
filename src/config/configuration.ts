import { IConfig } from './IConfig';

import * as dotenv from 'dotenv';
const envVars = dotenv.config()
console.log("inside config", envVars);


const { port, NODE_ENV } = envVars.parsed;
console.log('---config---', dotenv.config)

export default Object.freeze({ port: port, env: NODE_ENV || 'local' })