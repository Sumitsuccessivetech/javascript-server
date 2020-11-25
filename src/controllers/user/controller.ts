import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';
import IRequest from '../../IRequest';
import * as bcrypt from 'bcrypt';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

   public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email } = req.body;
        const user = new UserRepository();
        await  user.getUser({ email })
        .then((userData) => {
            { if (userData === undefined) {
                res.status(404).send({
                    err: 'User Not Found',
                    code: 404
                });
                return;
            }
            const { password } = userData;
            const passFromBody = req.body.password;
            console.log('Hash Password is: ',password);

            if ((bcrypt.compareSync(passFromBody, password)== undefined)) {
                res.status(401).send({
                    err: 'Invalid Password',
                    code: 401
                });
                return;
            }
            const createToken = jwt.sign(userData.toJSON(), config.KEY, { expiresIn: '15m' });
            res.send({
                message: 'Login Successfully',
                status: 200,
                'token': createToken
            });
           return;
        }
    });
    }
    public async me(req: IRequest, res: Response, next: NextFunction) {
        const _id = req.query;
        const user = new UserRepository();

        await user.getUser({ _id })
            .then((data) => {
                res.status(200).send({
                    message: 'User Fetched successfully',
                    'data': { data },
                    code: 200
                });
            });
    }

    // get(req: Request, res: Response, next: NextFunction) {
    //     try {
    //         console.log('Inside get method of User');
    //         res.send({
    //             message: 'User fetched succefully',
    //             data: [{
    //                 name: 'user1',

    //             },
    //             {
    //                 name: 'user2',
    //             }]
    //         });
    //     } catch (err) {
    //         console.log('Inside err', err);
    //     }
    // }
    public async create(req: Request, res: Response, next: NextFunction) {
        const {  email, name, role, password } = req.body;
        const creator = req.userData._id;

        const user = new UserRepository();
        await user.createUser({ email, name, role, password }, creator)
            .then(() => {
                console.log("body is", req.body);
                res.send({
                    message: 'User Created Successfully!',
                    data: {
                        'name': name,
                        'email': email,
                        'role': role,
                        'password': password
                    },
                    code: 200
                });
            });
    }
    public async update(req: Request, res: Response, next: NextFunction) {
        const { id, dataToUpdate } = req.body;
        const updator = req.userData._id;
        console.log('id',id);
        console.log('dataToUpdate',dataToUpdate);
        
        const user = new UserRepository();
        await user.updateUser( id, dataToUpdate, updator)
        .then((result) => {
            res.send({
                message: 'User Updated',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                error: 'User Not Found for update',
                code: 404
            });
        });
    }
    public async delete(req: Request, res: Response, next: NextFunction) {
        const  id  = req.params.id;
        const remover = req.userData._id;
        const user = new UserRepository();
        await user.deleteData(id, remover)
        .then((result) => {
            res.send({
                message: 'Deleted successfully',
                code: 200
            });
        })
        .catch ((err) => {
            res.send({
                message: 'User not found to be deleted',
                code: 404
            });
        });
    }
}

export default UserController.getInstance();