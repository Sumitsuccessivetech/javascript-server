import { Router } from 'express';
import traineeRoutes from './controllers/trainee/routes';

const mainRouter= Router();

mainRouter.use('/trainee', traineeRoutes);

export default mainRouter;