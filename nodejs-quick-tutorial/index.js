const { readFile, readFileSync } = require('fs');
// Think of 'Sync' === Blocking

const txt = readFileSync('./hello.txt', 'utf8');

console.log(txt);
console.log('do the ASAP');


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