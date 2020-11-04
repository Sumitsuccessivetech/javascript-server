import { IConfig } from './IConfig';

import * as dotenv from 'dotenv';
const envVars = dotenv.config()
console.log("inside config", envVars);


const config = envVars.parsed;
Object.freeze(config);
export default config;