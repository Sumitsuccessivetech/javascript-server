import * as express from 'express';
import * as bodyparser from 'body-parser';
import { errorHandler } from './libs/routes';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import mainRouter from './router';
import Database from './libs/Database'
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import * as cors from 'cors';

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
    initSwagger = () => {
        const options = {
        definition: {
        info: {
        openapi: '3.0.0',
        description: 'An express app performing CRUD operation after authentication',
        version: '1.0.0',
        title: 'First express app',
        properties: {
        email: 'shashank.baranawal@successive.tech'
        },
        },
        securityDefinitions: {
        Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'headers'
        }
        }
        },
        basePath: '/api',
        swagger: '4.1',
        apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
        }
        

    public setupRoutes() {
        this.app.use(cors());
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
            next();
        });
        this.app.use('/api', mainRouter);
        this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
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
                    }
                });
            })
            .catch(err => console.log(err));
        return this;

    }
}

export default Server;
