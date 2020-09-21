// Working with the File System Module, pt 2

const fs = require('fs');
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err);
    else
        fs.writeFile('./tutorial/example.txt','123',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('Successfully create the file');
        });        
});