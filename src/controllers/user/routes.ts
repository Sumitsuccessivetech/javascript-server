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
/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     tags:
 *       - User
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/me'
 */
    UserRouter.route('/me')
    .get(authMoiddleWare('getUsers', 'all'),validationHandler(validation.get), UserController.me)
/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     tags:
 *       - User
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "200"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */
UserRouter.route('/login')
    .post(validationHandler(validation.login), UserController.login);

export default UserRouter;