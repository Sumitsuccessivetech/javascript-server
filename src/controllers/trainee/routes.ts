import { Router } from 'express';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation'
import traineeController from './controller';


const traineeRouter =Router();

traineeRouter.route('/')
   .get(validationHandler(config.get), traineeController.get)
   .post(validationHandler(config.create), traineeController.create)
   .put(validationHandler(config.update), traineeController.update)
   .delete(validationHandler(config.Delete), traineeController.delete);

export default traineeRouter;
