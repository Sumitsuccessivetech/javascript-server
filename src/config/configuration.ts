import { IConfig } from './IConfig';

import * as dotenv from 'dotenv';
const envVars = dotenv.config()
console.log("inside config", envVars);


const { PORT, NODE_ENV } = envVars.parsed;
console.log('---config---', dotenv.config)

export default Object.freeze({ port: PORT, env: NODE_ENV || 'local' })