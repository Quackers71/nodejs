const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmtter = new MyEmitter();

// Event listener
myEmtter.on('event', () => console.log('Event Fired!'));

// Init event
myEmtter.emit('event');
myEmtter.emit('event');
myEmtter.emit('event');
myEmtter.emit('event');