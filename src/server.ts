import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';

class Server{
    app
    constructor(private config){
        this.app=express()
    }
    bootstrap(){
        this.setupRouts()
        return this;
    }
    public setupRouts(){
        const { app }=this;
        app.use('/health-check',(req, res)=>{
            console.log("inside Second middleware");
            res.send("I am OK");
        });

        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
        this.app.use((req, res, next) => {
            next({
                error: "Not Found",
                code: 404
                
            })
        })

        this.app.use((err, req, res, next) => {
            console.log(err);
            res.json(
                {
                    "error ": err.error,
                    status : err.code,
                    message : err. message || "Error",
                    timeStamp: new Date()
                 
                }
            )
        });
        return this;
    }
    public initBodyParser(){
        this.app.use(bodyParser.json( {type : 'application/**json'}))
    }
    run(){
        const {app, config:{PORT}}=this;
        app.listen(PORT,(err)=>{
            if (err) {
                console.log( err );
                
            }
            console.log(`App is running on port ${PORT}`);

        })
    }
}
export default Server;