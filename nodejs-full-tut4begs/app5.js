// Working with Readable and Writeable Streams
// Why you should use Streams

const fs = require('fs');

const readStream = fs.createReadStream('./largefile.txt', 'utf8');

readStream.on('data',(chunk)=>{
    console.log(chunk);
});

// fs.readFile('./largefile.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(file);
// });

// Output from largefile.txt
// $ node app5
// RangeError [ERR_FS_FILE_TOO_LARGE]: File size (2814541824) is greater than possible Buffer: 2147483647 bytes
//     at FSReqCallback.readFileAfterStat [as oncomplete] (fs.js:278:11) {
//   code: 'ERR_FS_FILE_TOO_LARGE'
// }

// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });