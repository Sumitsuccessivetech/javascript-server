import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import config from './validation'

const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
traineeRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.Delete), TraineeController.delete);
traineeRouter.route('/')
    .put(authMiddleWare('getUsers', 'all'), validationHandler(Validation.update), TraineeController.update);
traineeRouter.get('/getall', authMiddleWare('getUser', 'all'), validationHandler(Validation.get),
    TraineeController.get);
export default traineeRouter;
