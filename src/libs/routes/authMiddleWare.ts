import * as jwt from 'jsonwebtoken';
import hasPermission from './permission';
import { Response, NextFunction } from 'express'
export default (module, permissionType) => (req, res, next) => {
    try {
        console.log('config is', module, permissionType);
        const token = req.headers.authorization;
        console.log(token);
        const User = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(User.Role);
        const result = hasPermission(module, User.Role, permissionType);
        console.log('result is', result);
        if (result === true)
            next();
        else {
            next({
                message: 'Unauthorised',
                status: 403
            });
        }
    }
    catch (err) {
        next({
            message: err
        });
    }
};