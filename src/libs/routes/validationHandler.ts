import { NextFunction, Request, Response } from 'express';

export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const obj = config[key];
        console.log('body is', req.body);
        const errMsg = obj.errorMessage;
        const values = obj.in.map((val) => {
            console.log('key is', key);
            console.log('val is', val);
            return req[val][key];
        });
        console.log('value is', values[0]);
        if (obj.required) {
            if (isNull(values[0])) {
                throw ({ status: 400, msg: `${key} is required field`, error: "Bad Request" })
            }
        }
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                throw ({ status: 400, msg: `${key}  should be a string`, error: "Bad Request" })
            }
        }
        if (obj.isObject) {
            if (!(typeof (values) == 'object')) {
                throw ({ status: 400, msg: `${key}  should be an Object`, error: "Bad Request" })
            }
        }
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(values[0])) {
                throw ({ status: 400, msg: `${key} is not a valid Expression`, error: "Bad Request" })
            }
        }

        if (obj.number) {
            if (isNaN(values[0]) || values[0] === undefined) {
                throw ({ status: 400, msg: `${key}  must be a number`, error: "Bad Request" })
            }
        }
    })
    if (errors.length > 0) {
        res.status(400).json({ errors });
    }
    else {
        next();
    }
};

function isNull(obj) {
    const a = (obj === 'undefined' || obj === null);
    return a;
}