import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import Database from './libs/Database'
import mainRouter from './router'

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
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
            next();
        });
        this.app.use('/api', mainRouter);
        this.app.use(notFoundHandler);
        this.app.use(errorHandler);
        return this;
    }
    run() {
        const { app, config: { PORT, MONGO_URL } } = this;
        Database.open('mongodb://localhost:27017/express-training')
            .then((res) => {
                console.log("Successfully connected to mongo")
                app.listen(PORT, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`App is running on port ${PORT}`);
                });

            })
            .catch(err => console.log(err));
    }

}
export default Server;