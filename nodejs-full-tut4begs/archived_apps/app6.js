// Pipes and Pipe Chaining

const fs = require('fs');
const zlib = require('zlib');


const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gzip');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunzip).pipe(writeStream);

// Using pipe is a shorter version than using the writeStream.write method below
// When using pipe you need two streams i.e. src readStream and dest writeStream


// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });