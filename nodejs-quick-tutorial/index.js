const express = require('express');
const { request } = require('http');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {

        if (err) {
            response.status(500).send('Sorry, out of order')
        }

        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(content, "utf8");
        
        response.send(html);
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// REQUEST - Users incoming data
// RESPONSE - Your outgoing data



// console.log(myModule);

// const { readFile } = require('fs').promises;
// Importing readFile from the promises Namespace

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

// Think of 'readFile' === Non blocking

// const txt = readFileSync('./hello.txt', 'utf8');

// readFile with a Callback function
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// })

// console.log(txt);
// console.log('do the ASAP');


// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {

//     console.log('yummy ')
// })

// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');


// console.log(global.luckyNum);

// global.luckyNum = '23';

// console.log(global.luckyNum);

// // Display platform
// console.log(process.platform);

// // Display user
// console.log(process.env.USER);

// // listen to event
// process.on('exit', function() {

//     // do somthing!

// });