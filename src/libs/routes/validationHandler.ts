import { NextFunction, Request, Response } from 'express';

export default (config) => (req: Request, res: Response, next: NextFunction) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const obj = config[key];
        const values = obj.in.map((val) => {
            return req[val][key];

        });
        console.log('value is', values[0]);
        if (Object.keys(req[obj.in]).length === 0) {
            errors.push({
                key: { key },
                location: obj.in,
                message: obj.errorMessage || `Values should be passed through ${obj.in}`,
            })
        }

        if (obj.required) {
            if (isNull(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} is required`,
                })
            }
        }
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be a String`,
                })
            }
        }
        if (obj.isObject) {
            if (!(typeof (values) == 'object')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be an object`,
                })
            }
        }
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} is not a valid expression`,
                });
            }
        }

        if (obj.number) {
            if (isNaN(values[0]) || values[0] === undefined) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key}  must be a number`,
                });
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