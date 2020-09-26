const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/example',(req,res)=>{
    res.send('Hitting example route');
});

app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send('Example with route params of name ' + req.params.name + ' and age ' + req.params.age);
});

app.listen(3000);