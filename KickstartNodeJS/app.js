
const http = require('http');

const server = http.createServer((req,res)=> {
    console.log('Harsh');
})

server.listen(4000);
