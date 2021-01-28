import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log("inside config", envVars);

const { PORT, NODE_ENV, MONGO_URL, SECRETKEY, PASSWORD } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, key: SECRETKEY, password: PASSWORD, mongo_url: MONGO_URL || 'mongodb://localhost:27017/express-training' });
