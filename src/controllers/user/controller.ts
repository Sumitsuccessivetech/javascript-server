import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel'
import IRequest from '../../IRequest';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    login(req: IRequest, res: Response, next: NextFunction) {

        const { email , password } = req.body;
        // console.log('Email is: ',email,'Password is :', password);
       // console.log(userModel);
        userModel.findOne({ email: email }, (err, docs) => {
            if (docs) {
                if ( password === docs.password) { 
                   const token = jwt.sign({docs},'qwertyuiopasdfghjklzxcvbnm123456');
                    res.send({
                        data: token,
                        message: 'LoggedIN',
                        status: 200
                    })
                }
                 else {
                    res.send({
                        status: 404,
                        message: 'Password not exists in DB'

                   });
                } 
            }
            else {
                res.send({
                    status: 404,
                    message: 'Email Not Exist in DB'
                });
            };
            const secretKey  = 'qwertyuiopasdfghjklzxcvbnm123456';
            const createToken = jwt.sign({ docs }, secretKey);
            //console.log(createToken);
            res.send(createToken);
            req.userData = createToken;
            console.log(req.userData);
        });
    }
    me(req: IRequest, res: Response, next: NextFunction) {
        const data=req.userData;
        console.log(data);

        res.json(data);
        // next();
    }

    get(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside get method of User');
            res.send({
                message: 'User fetched succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside post method of Trainee');
            res.send({
                message: 'User created succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside put method of Trainee');
            res.send({
                message: 'Trainee updated succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Inside delete method of Trainee');
            res.send({
                message: 'Trainee deleted succefully',
                data: [{
                    name: 'user1',

                },
                {
                    name: 'user2',
                }]
            });
        } catch (err) {
            console.log('Inside err', err);
        }
    }
}

export default UserController.getInstance();