const events = require('events'); // Import the 'events' module

// Create instances of EventEmitter for different purposes
const firstEvent = new events.EventEmitter();
const messageEvent = new events.EventEmitter();
const typinyEvent = new events.EventEmitter();

console.log('1');

// Set up a listener for the 'message' event on 'typinyEvent'
// This listener will execute a callback function when the event is emitted
typinyEvent.on('message', (data) => {
    console.log(data); // Log the data received with the event to the console
});

console.log('2');

// Emit the 'message' event on 'typinyEvent'
// This will trigger the callback function set up by the listener
typinyEvent.emit('message', 'is typing...');
