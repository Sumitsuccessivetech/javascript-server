import * as express from 'express';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import UserController from './controller';
import { getUsers, getDetails } from '../constants';
//import { config } from 'dotenv/types';

const UserRouter = express.Router();
UserRouter.route('/')
    .post(authMoiddleWare('getUsers', 'read'), UserController.create)
    .put(authMoiddleWare('getUsers', 'read'), UserController.update)

UserRouter.route('/:id').delete(authMoiddleWare('getUsers', 'read'),
    UserController.delete);
UserRouter.route('/me')
    .get(authMoiddleWare(getUsers, 'all'), UserController.me)

UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);

export default UserRouter;