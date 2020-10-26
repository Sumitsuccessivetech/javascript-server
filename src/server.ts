import * as express from 'express';
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
        const { app, config:{ port } } =this;
        app.listen(9800, (err) => {
            if(err){
                console.log(err);
            }
        })
    }
}

export default server;