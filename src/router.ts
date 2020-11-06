import { Router } from 'express';
//import {traineeRoute} from './controllers/trainee';
import traineeRoutes from './controllers/trainee/routes';

const mainRouter= Router();

mainRouter.use('/trainee', traineeRoutes);

export default mainRouter;