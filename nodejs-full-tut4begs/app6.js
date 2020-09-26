// Pipes and Pipe Chaining

const fs = require('fs');
const zlib = require('zlib');


const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gzip');

readStream.pipe(gzip).pipe(writeStream);

// Using pipe is a shorter version than using the writeStream.write method below
// When using pipe you need two streams i.e. src readStream and dest writeStream


// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });