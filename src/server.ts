/*import * as express from "express";
class server{
    app
    constructor(private config){
        this.app=express()
    }
    bootstrap(){
        this.setupRoutes()
        return this;
    }

    setupRoutes(){
        const {app}= this;
        app.get('/health-check', (req, res, next)=> {
            res.send('I am OK');
        })
        return this;
    }

    run(){
        const { app, config:{ PORT } } =this;
        app.listen(9800, (err) => {
            if(err){
                console.log(err);
            }
            console.log(`App is running on port ${PORT}`);
        })
    }
}

export default server; */
import * as express from "express";
class Server{
    app
    constructor(private config){
        this.app=express()
    }
    bootstrap(){
        this.setupRouts()
        return this;
    }
    setupRouts(){
        const { app }=this;
        app.get('/health-check',(req,res,next)=>{
            res.send("I am OK");
        });

        return this;
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