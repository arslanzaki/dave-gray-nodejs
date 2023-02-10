const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// Initialize Object
const myEmitter = new MyEmitter();

// Add Listener For The Log Event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit Event
  myEmitter.emit("log", "Log Event Emitted!");
}, 2000);
