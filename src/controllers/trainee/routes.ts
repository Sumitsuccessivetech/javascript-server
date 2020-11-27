import { Router } from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import Validation from './validation';
//import authMiddleWare from '../../libs/routes/authMiddleWare';

const traineeRouter = Router();
traineeRouter.route('/')
.get(TraineeController.get)
.post(TraineeController.create)
.put(TraineeController.update);
traineeRouter.route('/:id')
.delete(validationHandler(Validation.Delete), TraineeController.delete);

export default traineeRouter;
