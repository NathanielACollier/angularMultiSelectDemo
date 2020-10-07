import express = require('express');
const cors = require('cors');
import { generalController } from './controllers/general';

let port = 8080;
const app: express.Application = express();
app.use(cors());
app.options('*', cors());

app.use('/general', generalController);

// serve angular
app.use('/', express.static('../dist'));

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});