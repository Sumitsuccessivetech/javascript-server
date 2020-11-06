import * as express from 'express';
import TraineeController from './controller';
import { validationHandler } from '../../libs/routes';
import config from './validation';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { Permission, users } from '../../libs/routes/constants';
const traineeRoutes = express.Router();

traineeRoutes.route('/mainRouter')
        .get(authMiddleWare('getUsers', 'read'), validationHandler(config.get), TraineeController.get)
        .post(authMiddleWare('getUsers', 'write'), validationHandler(config.create), TraineeController.create)
        .put(authMiddleWare('getUsers', 'all'), validationHandler(config.update), TraineeController.update)
        .delete(authMiddleWare('getUsers', 'delete'), validationHandler(config.Delete), TraineeController.delete);

export default traineeRoutes;