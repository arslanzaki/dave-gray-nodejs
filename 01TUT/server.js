// How NodeJS Differs From Vanilla JS

// 1) NodeJS runs on a server, not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello World");
// 3) Global object instead of window object
// console.log(global)
// 4) Has common core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// For Example

const os = require("os");
const path = require("path");
// const math = require('./math')
const {add,sub,mul,div} = require('./math')

// 6) Missing some JS APIs like fetch

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(add(5,7));
console.log(mul(5,7));
console.log(div(5,7));