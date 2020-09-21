// Working with the File System Module, pt 2

const fs = require('fs');

fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else
        console.log(files);
        for(let file of files){
            fs.unlink('./example/' + file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('Successfully deleted the file: ' + file);
            });
        }
});

// Output post deletion:
// $ node app4
// [ 'a.txt', 'b.txt', 'c.txt', 'd.txt', 'e.txt' ]
// Successfully deleted the file: a.txt
// Successfully deleted the file: b.txt
// Successfully deleted the file: c.txt
// Successfully deleted the file: d.txt
// Successfully deleted the file: e.txt

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the file');
//         fs.rmdir('tutorial',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('Successfully deleted the folder');
//         });
// });

// fs.mkdir('tutorial',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         fs.writeFile('./tutorial/example.txt','123',(err)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log('Successfully create the file');
//         });        
// });