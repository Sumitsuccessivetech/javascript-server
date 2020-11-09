import * as mongoose from 'mongoose';
import seedData from './seedData'

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {

                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                seedData();
                resolve();
            });
        });
    }
    static disconnect() {
        mongoose.disconnect((err) => {
            if (err) {
                console.log(err);
            }
            console.log('MongoDB connection close');
        });
    }
}
export default Database;