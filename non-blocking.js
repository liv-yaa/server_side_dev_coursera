// non-blocking.js

// Example from https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm#:~:text=Callback%20is%20an%20asynchronous%20equivalent,makes%20heavy%20use%20of%20callbacks.&text=This%20makes%20Node.,any%20function%20to%20return%20results.
// to demonstrate how javascript can handle blocking or non-blocking operations

// 1. TRY THE BLOCKING WAY:
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("Program Ended");


// 2. TRY THE NON BLOCKING WAY: uses a CALLBACK function :)
var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
});



