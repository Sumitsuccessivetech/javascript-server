import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    public get = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userRepository.findAll(req.body);
            if (!user) {
                next({
                    message: 'trainee Not Fetched',
                    error: 404,
                })
            }
            res.send({
                message: 'trainee fetched successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Fetching trainee'
            })
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const creator = req.headers.user;
            const user = await this.userRepository.create(req.body, creator);
            if (!user) {
                next({
                    message: 'trainee Not Created',
                    error: 404,
                })
            }
            res.send({
                message: 'trainee created successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Creating trainee'
            })
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const id = req.body.id;
            if (!id) {
                next({
                    message: 'trainee Not Updated',
                    error: 404,
                })
            } else {
                const user = await this.userRepository.update(data, req.headers.user);
                res.send({
                    message: 'trainee updated successfully',
                    data: user,
                    status: 200,
                });
            }
        } catch (err) {
            next({
                message: 'Error while Updating trainee'
            })
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            if (!id) {
                next({
                    message: 'id is Required',
                    error: 404,
                })
            } else {
                await this.userRepository.delete(id, req.headers.user);
                res.send({
                    message: 'trainee deleted successfully',
                    data: req.params.id,
                    status: 200,
                });
            }
        } catch (err) {
            next({
                message: 'Error while Deleting trainee'
            })
        }
    }
}

export default TraineeController.getInstance();