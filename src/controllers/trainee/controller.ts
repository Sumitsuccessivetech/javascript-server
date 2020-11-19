import UserRepositories from '../../repositories/user/UserRepository';
class traineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: traineeController

    static getInstance() {
        if (traineeController.instance) {
            return traineeController.instance;
        }
        traineeController.instance = new traineeController();
        return traineeController.instance;
    }

    public get = async (req, res, next) => {
        try {
            console.log("Inside get method of Trainee Controller");
            const extractedData = await this.userRepository.findAll(req.body, {}, {});
            res.status(200).json({
                message: "Trainer fetched succesfully",
                data: [extractedData]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

    public create = async (req, res, next) => {
        try {
            console.log("Inside post method of Trainee Controller");
            this.userRepository.userCreate(req.body);
            res.status(200).json({
                message: "Trainee created succesfully",
                data: [req.body]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

    public update = async (req, res, next) => {
        try {
            console.log("Inside update method of Trainee Controller");
            const isIdValid = await this.userRepository.userUpdate(req.body);
            if (!isIdValid) {
                return next({
                    message: 'Id is invalid',
                    error: 'Id not found',
                    status: 400
                });
            }
            res.status(200).json({
                message: "Trainee updated succesfully",
                data: [req.body]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

    public delete = async (req, res, next) => {
        try {
            console.log("Inside post method of Trainee Controller");
            const id = req.params.id;
            const isIdValid = await this.userRepository.delete(id);
            if (!isIdValid) {
                return next({
                    message: 'Id is invalid',
                    error: 'Id not found',
                    status: 400
                });
            }
            res.status(200).json({
                message: "Trainee Deleted succesfully",
                data: [
                    {
                        Id: id
                    }
                ]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

}
export default traineeController.getInstance();