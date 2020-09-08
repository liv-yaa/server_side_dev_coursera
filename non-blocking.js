// non-blocking.js

// Example from https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm#:~:text=Callback%20is%20an%20asynchronous%20equivalent,makes%20heavy%20use%20of%20callbacks.&text=This%20makes%20Node.,any%20function%20to%20return%20results.
// to demonstrate how javascript can handle blocking or non-blocking operations

// 1. TRY THE BLOCKING WAY: no callback function :(
// var fs = require("fs");
// var data = fs.readFileSync('input.txt'); 

// console.log(data.toString());
// console.log("Program Ended");

// Result: File is printed first, 'Program Ended is last
// If it were a big file, this would stall!


// 2. TRY THE NON BLOCKING WAY: uses a CALLBACK function :)
var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if (err)
        return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");



// Result: The outer text 'Program Ended' prints first because the
// outer function has completed
// However, the inner function continues to run and print lines
// This means the program is not blocked 