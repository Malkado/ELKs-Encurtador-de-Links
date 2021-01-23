const express = require('express');
require('dotenv/config');
const routes = require('./routes/index.routing');
const cors = require('cors');
fs = require('fs')
const version = fs.readFileSync('./version','utf8');

const app = express();
const port = process.env.SERVER_PORT || 3000;

//Rotas dos endpoints
app.use(routes);
//Cors
app.use(cors());



app.listen(port, () => {
    console.log(`
    Listening on the port: ${port}
    Server release:  ${version}`
    );
});