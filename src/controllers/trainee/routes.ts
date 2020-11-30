import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
import { authMoiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
.get(authMoiddleWare('getUsers', 'read'), validationHandler(Validation.get), TraineeController.get)
.post(authMoiddleWare('getUsers', 'write'), validationHandler(Validation.create), TraineeController.create)
.put(authMoiddleWare('getUsers', 'write'), validationHandler(Validation.update),TraineeController.update);
traineeRouter.route('/:id')
.delete((req, res, next) => { console.log("------inside first md----"); next()},authMoiddleWare('getUsers', 'delete'), validationHandler(Validation.Delete), TraineeController.delete);

export default traineeRouter;
