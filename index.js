import express from 'express';
import bodyParser from 'body-parser';
import  config from './config';
import './store/Connection';
import routes from "./network/routes";

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(config.api.port, () => {
    console.log(`app running on http://localhost:${config.api.port}`)
});