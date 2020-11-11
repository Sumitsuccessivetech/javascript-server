import { NextFunction, Request, Response } from 'express';

export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const obj = config[key];
        const errMsg = obj.errorMessage;
        const values = obj.in.map((val) => {
            console.log('key is', key);
            console.log('val is', val);
            return req[val][key];
        });
        const validatedValues = values.filter((val) => (val));
        console.log('value is', validatedValues);
        if (obj.required) {
            if (isNull(validatedValues)) {
                throw ({ status: 400, msg: `${key} is required field`, error: "Bad Request" })
            }
        }
        if (obj.string) {
            if (!(typeof (validatedValues) === 'string')) {
                throw ({ status: 400, msg: `${key}  should be a string`, error: "Bad Request" })
            }
        }
        if (obj.isObject) {
            if (!(typeof (validatedValues) == 'object')) {
                throw ({ status: 400, msg: `${key}  should be an Object`, error: "Bad Request" })
            }
        }
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(validatedValues)) {
                throw ({ status: 400, msg: `${key} is not a valid Expression`, error: "Bad Request" })
            }
        }

        if (obj.number) {
            if (isNaN(validatedValues || validatedValues=== undefined)){
                throw ({ status: 400, msg: `${key}  must be a number`, error: "Bad Request" })
            }
        }
    })
        next();
};

function isNull(obj) {
    const a = (obj === 'undefined' || obj === null);
    return a;
}