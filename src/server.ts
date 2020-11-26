import * as express from 'express';
import * as bodyparser from 'body-parser';
import { errorHandler } from './libs/routes';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import mainRouter from './router';
import Database from './libs/Database'

class Server {
    private app: any;
    constructor(private config) {
        this.app = express();

    }

    public initBodyParser() {
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
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
        this.app.use(notFoundRoutes);
        this.app.use(errorHandler);
        return this;
    }
    run() {
        const { app, config: { port, mongo_url } } = this;
        Database.open(mongo_url)

            .then((res) => {
                console.log('Succesfully connected to Mongo');
                app.listen(port, (err) => {
                    if (err) {
                        console.log(err);
                        Database.disconnect();
                    }
                    else {
                        console.log(`App is running on port ${port}`);
                        Database.disconnect();
                    }
                });
            })
            .catch(err => console.log(err));
        return this;

    }
}

export default Server;
