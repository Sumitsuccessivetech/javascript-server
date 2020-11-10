import * as mongoose from 'mongoose';
import seedData from './seedData'

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mongoose.set('useUnifiedTopology', true);
            mongoose.set('useNewUrlParser', true);
            mongoose.set('useCreateIndex', true);
            mongoose.connect(mongoURL,  (err) => {

                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                console.log("database Connected");
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