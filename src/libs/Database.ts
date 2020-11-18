import * as mongoose from 'mongoose';

class Database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
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
        console.log('Inside disconnect');
    }
}
export default Database;