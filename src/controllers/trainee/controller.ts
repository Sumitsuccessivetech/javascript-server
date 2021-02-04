import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

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
            const Search = req.query.search as string || '';
            console.log(Search);
            let value = '';
            let key = '';
            const regexName = /^[a-z]+$/i;
            const regexEmail = /\b[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]{2,}\b/;
            if (req.query.search) {
                if (regexName.test(Search) || regexEmail.test(Search)) {
                    value = Search;
                    key = 'name';
                }
                else {
                    console.log('Search Successfully');
                }
            }
            else {
                key = undefined;
                value = undefined;
            }

            const sort = {}
            sort[`${req.query.sortedBy}`] = req.query.sortedOrder;
            console.log(sort);
            const user = await this.userRepository.findAll(req.body).sort(sort)
                .skip(Number(req.query.skip)).limit(Number(req.query.limit));;
            if (!user) {
                next({
                    message: 'trainee Not Fetched',
                    error: 404,
                })
            }
            res.send({
                totalCount: await this.userRepository.count(req.body),
                count: user.length,
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
            const pass = await bcrypt.hash(req.body.password, 10);
            req.body.password = pass;
            this.userRepository.create(req.body, req.headers.user);
            res.send({
                message: 'trainee created successfully',
                data: req.body,
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
            const user = await this.userRepository.update(data, req.headers.user);
            res.send({
                message: 'trainee updated successfully',
                data: user,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Updating trainee'
            })
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            await this.userRepository.delete(id, req.headers.user);
            res.send({
                message: 'trainee deleted successfully',
                data: req.params.id,
                status: 200,
            });
        } catch (err) {
            next({
                message: 'Error while Deleting trainee'
            })
        }
    }
}

export default TraineeController.getInstance();