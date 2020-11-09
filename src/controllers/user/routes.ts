import * as express from 'express';
import UserController from './controller';

const UserRouter = express.Router();

UserRouter.route('/')
.get( UserController.get)
.post( UserController.create)
.put( UserController.update)
.delete( UserController.delete);

export default UserRouter;