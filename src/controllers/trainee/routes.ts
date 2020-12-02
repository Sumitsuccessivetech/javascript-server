import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';

const traineeRouter = Router();
traineeRouter.route('/')
.get(TraineeController.get)
.post(TraineeController.create)
traineeRouter.route('/:id')
.delete(validationHandler(Validation.Delete), TraineeController.delete);
traineeRouter.route('/')
.put(validationHandler(Validation.update), TraineeController.update);

export default traineeRouter;
