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
            const user = await this.userRepository.findAll(req.body, {}, {});
            if(!user){
                next({
                    message: 'User Not Fetched',
                    error: 'Can not Find user',
                    status: 404
                })
            }
            res.send({
                message: 'trainee fetched successfully',
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
                    error: 'user Not Found',
                    status: 404

                })
            }
            res.send({
                message: 'trainee created successfully',
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
            const user = await this.userRepository.userUpdate(id, req.headers.user);
            if (!id) {
                next({
                    message: 'User Not Updated',
                    error: 'id is Required',
                    status: 404
                })
            }
            res.send({
                message: 'trainee updated successfully',
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
            const user = await this.userRepository.delete(id, req.headers.user);
            if (!id) {
                next({
                    message: 'User Not Updated',
                    error: 'id is Required',
                    status: 404
                })
            }
            res.send({
                message: 'trainee deleted successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Deleting User'
            })
        }
    }
}

export default TraineeController.getInstance();