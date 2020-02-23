import mongoose from 'mongoose';
import config from '../config';

class Connection {
    constructor() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(config.database.url);

        mongoose.connection.on('connected', () => {
            console.log(`Mongoose default connection is open to ${config.database.url}`);
        });

        mongoose.connection.on('error', (err) => {
            console.log(`Mongoose default connection has occurred ${err} error`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose default connection is disconnected');
        });

        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log('Mongoose default connection is disconnected due to application termination');
                process.exit(0);
            });
        });
    }
}

export default new Connection();
