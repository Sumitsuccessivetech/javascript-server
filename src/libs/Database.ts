import * as mongoose from 'mongoose';

class Database {
    static open(MONGO_URL) {
        return new Promise((resolve, reject) => {
            mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    static disconnect() {
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
        console.log('Database Disconnected!');
    });
    }
}
export default Database;