class traineeController {
    static instance: traineeController

    static getInstance() {
        if (traineeController.instance) {
            return traineeController.instance;
        }
        traineeController.instance = new traineeController();
        return traineeController.instance;
    }

    get(req, res, next) {
        try {
            console.log("Inside get method of Trainee Controller");
            res.status(200).json({
                message: "Trainer fetched succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }
  
    create(req, res, next){
        try{
            console.log("Inside post method of Trainee Controller");
            res.status(200).json({
                message: "Trainee created succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }
  
    update(req, res, next){
        try{

            console.log("Inside update method of Trainee Controller");
            res.status(200).json({
                message: "Trainee updated succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

    delete(req, res, next) {
        try {
            console.log("Inside post method of Trainee Controller");
            res.status(200).json({
                message: "Trainee Deleted succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {
            console.log(`Error Occured ${err}`)
        }
    }

}
export default traineeController.getInstance();