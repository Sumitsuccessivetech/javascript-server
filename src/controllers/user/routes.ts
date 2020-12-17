import * as express from 'express';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import { Permission } from '../../libs/routes/constants';
import UserController from './controller';
import { config } from 'dotenv/types';

const UserRouter = express.Router();
UserRouter.route('/:id')
    .delete(authMoiddleWare('getDetails', 'write'), validationHandler(validation.Delete), UserController.delete);
UserRouter.route('/')
    .get(authMoiddleWare('getUsers', 'all'), validationHandler(validation.get), UserController.get)

UserRouter.route('/')
    .post(authMoiddleWare('getUsers', 'read'), validationHandler(validation.create), UserController.create);

UserRouter.route('/')
    .put(authMoiddleWare('getUsers', 'read'), validationHandler(validation.update), UserController.update);
UserRouter.route('/me')
    .get(authMoiddleWare('getUsers', 'all'),validationHandler(validation.get), UserController.me)

UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);

export default UserRouter;