import { config } from 'dotenv/types';
import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permission';
import UserRepository from '../../repositories/user/UserRepository';
import { Console } from 'console';

export default (module, permissionType) => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodeUser = jwt.verify(token, key);
        const userRepository = new UserRepository();
        const userData = await userRepository.findOne({ originalId: decodeUser.originalId })
        if (!userData) {
            next({
                message: 'User not found',
                status: 403
            })
        }
        console.log(!hasPermission(module, decodeUser.role, permissionType));
        if (!hasPermission(module, decodeUser.role, permissionType)) {
            next({
                error: 'Unauthorised Access',
                message: "user are not authorized",
                status: 403
            });
        } else {
            req.userDataToken = userData;
            next();
        } 
    } catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Authentication Failed',
            status: 403
        });
    }
};
