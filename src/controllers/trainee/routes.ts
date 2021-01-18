import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
<<<<<<< HEAD
import { authMoiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
.get(authMoiddleWare('getUsers', 'read'), validationHandler(Validation.get), TraineeController.get)
.post(authMoiddleWare('getUsers', 'write'), validationHandler(Validation.create), TraineeController.create)
.put(authMoiddleWare('getUsers', 'write'), validationHandler(Validation.update),TraineeController.update);
traineeRouter.route('/:id')
.delete((req, res, next) => { console.log("------inside first md----"); next()},authMoiddleWare('getUsers', 'delete'), validationHandler(Validation.Delete), TraineeController.delete);
=======
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
>>>>>>> 3c2246ddf1c903b9389f556772f62ea1fc73ced9

export default traineeRouter;
