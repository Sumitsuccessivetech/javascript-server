import { config } from 'dotenv/types';
import * as jwt from 'jsonwebtoken';
import { key } from './constants';
import hasPermission from './permission';
export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        if (token !== undefined) {
            const user = jwt.verify(token, key);
            console.log('user is ',user);
            const result = hasPermission(module, user.docs.role, permissionType);
            req.userData = user;
            if (result) {
                next();
            } else {
                next({
                    error: 'Unauthorised access',
                    status: 403,
                    message: 'User is Not authorized'
                });
            }
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
