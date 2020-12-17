import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log("inside config", envVars);

const { PORT, NODE_ENV, MONGO_URL, SECRETKEY } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, mongo_url: MONGO_URL, secretKey: SECRETKEY || 'mongodb://localhost:27017/express-training' });