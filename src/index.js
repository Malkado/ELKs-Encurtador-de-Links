const express = require('express');
require('dotenv/config');
const routes = require('./routes/routes.index');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(routes);




app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);

});