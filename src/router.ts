import { Router } from 'express';
import traineeRoutes from './controllers/trainee/routes';
import userRoutes from './controllers/user/routes'
const mainRouter = Router();

mainRouter.use('/trainee', traineeRoutes);
mainRouter.use('/user', userRoutes);

export default mainRouter;