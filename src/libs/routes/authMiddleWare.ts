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
            const result = hasPermission(module, decodeUser.role, permissionType);
            req.userData = decodeUser.result;
            const userRepository = new UserRepository();
            userRepository.findOne({ id: decodeUser.id })
                .then((userData) => {
                    if (!userData) {
                        throw 'User Not Found';
                    }
                    else if (result) {
                        next()
                    }else {
                        req.query = decodeUser.id;
                        req.userDataToken = userData;
                        next();
                    }
                })
                .catch ((err) => {
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
            message: err.message
        });
    }
};
