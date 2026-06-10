/*// Include the server in your file
const server = require('server');
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server([
  get('/', ctx => 'Hello world!')
]);*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('server running on port ${port}.');
})