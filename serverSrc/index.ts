import * as path from "path";
import express = require('express');
const cors = require('cors');
import { generalController } from './controllers/general';


function serveIndex(request:any,response:any){
    response.sendFile(path.resolve('./dist/Index.html'));
}

let port = 8080;
const app: express.Application = express();
app.use(cors());
app.options('*', cors());

app.use('/general', generalController);

// serve angular
// followed the way this person does it: https://stackoverflow.com/questions/39845526/how-to-serve-an-angular2-app-in-a-node-js-server
app.use( express.static(path.resolve( './dist')));
app.get('/', serveIndex);
app.get('/*', serveIndex);


app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});