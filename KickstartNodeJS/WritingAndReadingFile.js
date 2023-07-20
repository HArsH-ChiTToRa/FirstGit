const http = require('http');

const routes = require('./route');

console.log(routes.someTxt);

const server = http.createServer(routes.handler);

server.listen(4000);