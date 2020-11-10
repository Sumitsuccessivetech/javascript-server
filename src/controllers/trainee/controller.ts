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
            res.send({
                message: "Trainer fetched succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {

        }
    }
  
    create(req, res, next){
        try{
            console.log("Inside post method of Trainee Controller");
            res.send({
                message: "Trainee created succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {

        }
    }
  
    update(req, res, next){
        try{

            console.log("Inside update method of Trainee Controller");
            res.send({
                message: "Trainee updated succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {

        }
    }

    delete(req, res, next){
        try{
            
            console.log("Inside post method of Trainee Controller");
            res.send({
                message: "Trainee created succesfully",
                data: [
                    {
                        name: "Sumit",
                        address: "Noida"
                    }
                ]
            })
        } catch (err) {


        }
    }

}
export default traineeController.getInstance();