import {Request, Response, NextFunction} from 'express'

export default ((err, req : Request, res: Response, next:NextFunction) => {
    console.log('Error is', err);
    const {status= 500, msg='Something Went Wrong', error='Internal server Error'} = err;
    res.status(status).json(
        {
            error,
            status,
            message : msg,
            timeStamp: new Date()
         
        }
    )
});