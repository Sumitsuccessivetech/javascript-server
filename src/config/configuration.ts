import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log("inside config", envVars);

const { PORT, NODE_ENV, MONGO_URL, key, password } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, MONGO_URL: MONGO_URL, key: key, password: password || 'local' });