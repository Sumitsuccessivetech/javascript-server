import {IConfig } from './IConfig';

const envVars =require ('dotenv').config()
console.log("inside config", envVars);
const { PORT, NODE_ENV } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV || 'local' })

