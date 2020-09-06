// Example of how to set custom JS module exports 
// https://www.coursera.org/learn/server-side-nodejs/lecture/GmQnl/node-modules
// A module named 'rectangle' is created from this .js file

// The module.exports property determins what to export from the current module
// By defining two simple functions to the `module.exports` property
// these functions can be called from the rectangle module

exports.perimeter = (x, y) => (2*(x+y));
exports.area = (x, y) => (x*y);

// In index.js, we can now require and call these methods from this module


// Node Modules: How to use Callbacks and Error Handling
// https://www.coursera.org/learn/server-side-nodejs/supplement/U1OXb/exercise-instructions-node-modules-callbacks-and-error-handling
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() =>
            callback(new Error("rectangle dimensions should be greater than zero: l= " + x + " and b= " + y),
            null),
            2000);
    else
        setTimeout(() =>
            callback(null, {
                perimeter: () => (2 * (x + y)),
                area:() => (x * y)
            }),
        2000);
}