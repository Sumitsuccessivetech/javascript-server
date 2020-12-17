import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { userModel } from '../../repositories/user/UserModel'
import IRequest from '../../IRequest';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from '../../config';


class UserController {
    static instance: UserController;
    private userRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }

    public async login(req: IRequest, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        const user = new UserRepository();
        await user.get({ email })
            .then((userData) => {
                if (userData === null) {
                    next({
                        message: 'User does Not exist',
                        error: 404,
                    });
                }

                if (password !== req.body.password) {
                    next({
                        message: 'Password is Invalid',
                        err: 401,

                    });
                }
                const expDate = new Date();
                const payLoad = {
                    name: 'sumit',
                    iss: new Date(),
                    exp: expDate.setDate(expDate.getDate() + 7),
                    email: "sumit.upadhyay@successive.tech",
                    role: 'trainee'
                }
                const token = jwt.sign(payLoad, config.secretKey);
                res.send({
                    message: 'Login Successfull',
                    status: 200,
                    token: token
                });
            });
    }

    public async me(req: IRequest, res: Response, next: NextFunction) {
        const id = req.query;
        const user = new UserRepository();
        await user.get({ id })
            .then((data) => {
                res.send({
                    message: 'User Fetched successfully',
                    data: data,
                    status: 200
                });
            });
    }

    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.findAll(req.body, {}, {});
            if (!user) {
                next({
                    message: 'Can not Find user',
                    error: 404
                })
            }
            res.send({
                message: 'user fetched successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Fetching User'
            })
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.create(req.body, req.headers.user);
            if (!user) {
                next({
                    message: 'User Not Created',
                    error: 404,
                })
            }
            res.send({
                message: 'user created successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Creating User'
            })
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const user = await this.userRepository.update(id, req.headers.user);
            res.send({
                message: 'user updated successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Updating User'
            })
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            await this.userRepository.delete(id, req.headers.user);
            res.send({
                message: 'user deleted successfully',
                data: id,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Deleting User'
            })
        }
    }
}

export default UserController.getInstance();