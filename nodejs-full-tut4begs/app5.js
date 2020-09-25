// Working with Readable and Writeable Streams
// Why you should use Streams

const fs = require('fs');
fs.readFile('./largefile.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log(file);
});



// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');

// readStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// });