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
        values.forEach(element => {
           console.log(element); 
        // const element = values.filter((val) => (val));
        console.log('element is', element);
        if (obj.required) {
            if (isNull(element)) {
                throw ({ status: 400, msg: `${key} is required field`, error: "Bad Request" })
            }
        }
        if (obj.string) {
            if (!(typeof (element) === 'string')) {
                throw ({ status: 400, msg: `${key}  should be a string`, error: "Bad Request" })
            }
        }
        if (obj.isObject) {
            if (!(typeof (element) == 'object')) {
                throw ({ status: 400, msg: `${key}  should be an Object`, error: "Bad Request" })
            }
        }
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(element)) {
                throw ({ status: 400, msg: `${key} is not a valid Expression`, error: "Bad Request" })
            }
        }

        if (obj.number) {
            if (isNaN(element || element=== undefined)){
                throw ({ status: 400, msg: `${key}  must be a number`, error: "Bad Request" })
            }
        }
    })
});
        next();
};

function isNull(obj) {
    const a = (obj === 'undefined' || obj === null);
    return a;
}
