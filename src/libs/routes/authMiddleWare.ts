import { config } from 'dotenv/types';
import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permission';
import UserRepository from '../../repositories/user/UserRepository';
export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        if (token !== undefined) {
            const decodeUser = jwt.verify(token, key);
            console.log('user is ', decodeUser);
            const userRepository = new UserRepository();
            userRepository.findOne({ id: decodeUser.id })
                .then((userData) => {
                    if (!userData) {
                        throw 'User Not Found';
                    }
                    else if (!hasPermission(module, decodeUser.role, permissionType)) {
                        next({
                            error: 'Unauthorised Access',
                            message: "user are not authorized",
                            status: 403
                        });
                    } else {
                        //req.query = decodeUser.id;
                        req.userDataToken = userData;
                        next();
                    }
                })
                .catch((err) => {
                    next({
                        error: 'user is not found',
                        code: 400
                    });
                });
        } else {
            next({
                error: 'Unauthorised Access',
                message: "Please Provide Token"
            });
        }
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Uthentication Failed',
            status: 403
        });
    }
};
