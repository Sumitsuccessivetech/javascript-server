import * as dotenv from 'dotenv';

const envVars = dotenv.config();
console.log("inside config", envVars);

const { PORT, NODE_ENV, MONGO_URL } = envVars.parsed;

export default Object.freeze({ port: PORT, env: NODE_ENV, mongo_url: MONGO_URL || 'lmongodb://localhost:27017/express-training' });