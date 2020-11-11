import * as express from 'express';
import * as bodyparser from 'body-parser';
import { errorHandler } from './libs/routes';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import mainRouter from './router';
import { nextTick } from 'process';

class Server {

    private app: any;
    constructor(private config) {
        this.app = express();
    }

    public initBodyParser() {
        this.app.use(bodyparser.json({ type: 'application/**json' }))
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
        this.app.use( '/api' , mainRouter );
        this.app.use( notFoundRoutes );
        this.app.use( errorHandler );
        return this;
    }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);

            }
            console.log(`App is running on port ${port}`);
        });
    }
}

export default Server;