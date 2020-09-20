// Working with the File System Module

const fs = require('fs');

fs.appendFile('example2.txt','\nSome data being appended',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully appended data to the file!!');
});

// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file!!!');
// });

// //create a file
// fs.writeFile('example.txt','this is an example',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
// });
