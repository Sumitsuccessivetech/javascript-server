import * as express from "express";
import * as bodyparser from 'body-parser';
import { notFoundHandler, errorHandler } from './libs/routes'

class Server {
    private app;
    constructor(private config) {
        this.app = express()
    }
    bootstrap() {
        this.initBodyParser();
        this.setupRouts()
        return this;
    }
    setupRouts() {
        const { app } = this;
        app.get('/health-check', (req, res, next) => {
            res.send("I am OK");
        });
        this.app.use(notFoundHandler);
        this.app.use(errorHandler);

        return this;
    }
    public initBodyParser() {
        this.app.use(bodyparser.json({ type: 'application/*+json' }));
      }
    run() {
        const { app, config: { port } } = this;
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running on port ${port}`);

        })
    }
}
export default Server;

