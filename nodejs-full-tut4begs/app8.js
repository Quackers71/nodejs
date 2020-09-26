// Serving static files with http and file system modules

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);