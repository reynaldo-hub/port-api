import express from 'express';
import bodyParser from 'body-parser';
import  config from './config';
import './store/Connection';

const app = express();

app.use(bodyParser);

app.listen(config.api.port, () => {
    console.log(`app running on port ${config.api.port}`)
});