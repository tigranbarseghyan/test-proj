'use strict';

const http = require('http'); //download http module. This module is from node
                                // If we use some passwords and bank accounts, so we use https module

const {upper, gth, PORT} = require('./ports');


/*
createServer takes just one parameters.
*/
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.setHeader('content-type', 'text/html');
    res.end(
      `
      <!doctype html>
      <body>
      <h1> ${upper(__dirname)}</h1>
      <p>What a body =P</p>
      <h3> ${gth("Hello world")}</h3>
      </body>
      `)
  } else {
    res.end('UNKNOWN');
  }
})

server.on('connection', socket => {
  console.log("Someone conncted", socket);
}
)

server.listen(PORT, () => console.log('Started our server'));
