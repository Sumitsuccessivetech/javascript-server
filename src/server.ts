import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import notFoundRoutes from './libs/routes/notFoundRoutes';

class Server {
    private app: any;
    constructor(private config) {
        this.app = express();

    }
    public initBodyParser() {
        this.app.use(bodyParser.json());
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRouts();
        return this;
    }

    public setupRouts() {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            console.log("inside Second middleware");
            res.send("I am OK");
        });
        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
        this.app.use('/api', notFoundRoutes)
        this.app.use((req, res, next) => {
            next({
                error: "Not Found",
                code: 404

            })
        })

}
}
    export default Server;
