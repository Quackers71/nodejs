// The Events Module and EventEmitter Class

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let quackers = new Person('Quackers');
let scarlett = new Person('Scarlett');

scarlett.on('name',()=>{
    console.log('My name is ' + scarlett.name);
});

quackers.on('name',()=>{
    console.log('My name is ' + quackers.name);
});

quackers.emit('name');
scarlett.emit('name');