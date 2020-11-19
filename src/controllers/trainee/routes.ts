import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation'
import traineeController from './controller';
import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();
traineeRouter.route('/')
   .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), traineeController.get)
   .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), traineeController.create)
   .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), traineeController.update)
   .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.Delete), traineeController.delete);

export default traineeRouter;
