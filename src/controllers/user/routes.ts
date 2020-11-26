import * as express from 'express';
import authMoiddleWare from '../../libs/routes/authMiddleWare';
import validation from './validation'
import validationHandler from '../../libs/routes/validationHandler';
import { Permission } from '../../libs/routes/constants';
import UserController from './controller';
import { getUsers } from '../constants';
import { config } from 'dotenv/types';

const UserRouter = express.Router();

UserRouter.route('/')
    .get(UserController.get)      
    .post(UserController.create)                         
    .put(UserController.update)        
    .delete(UserController.delete);  
UserRouter.route('/me')
    .get(authMoiddleWare('getUsers', 'all'), UserController.me)

UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);

export default UserRouter;