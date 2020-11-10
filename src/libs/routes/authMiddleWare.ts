import * as jwt from 'jsonwebtoken';
import hasPermission from './permission';
import { Response, NextFunction } from 'express'
import IRequest from '..//../IRequest'

export default (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const secretKey = 'qwertyuiopasdfghjklzxcvbnm123456';
        const decodeUser = jwt.verify(token, secretKey);
        req.userDataToken = decodeUser;
        console.log(req.userDataToken)
        const valOfPermission = hasPermission(module, decodeUser.docs.role, permissionType);
        if (valOfPermission) {
            next();
        }


    } catch (err) {
        next({
            error: 403,
            message: 'Unauthorised Access'
        });

    }

};   