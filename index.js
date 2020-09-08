const rect = require('./rectangle'); //require it

// console.log(rectangle.name);
// Use the module's functions (defined in module.exports)
// console.log("rectagle module works: ", rectangle.perimeter(2, 3));
// console.log("rectagle module works: ", rectangle.area(2, 3));

// https://www.coursera.org/learn/server-side-nodejs/lecture/dUnyG/exercise-video-understanding-node-modules

// First, Create a JavaScript Object named rect and assign the function names to the JS Object.
// This will allow you to do these operations on the object.
var rect = {
    perimeter: (x, y) => rectangle.perimeter(x, y),
    area: (x, y) => rectangle.area(x, y),
}

// Costly: Solve the 'normal' way (without a callback) 
function solveRect(l, b) {
    // Takes length and breadth of retangle, computes rectangle
    console.log("Solving for rectangle l/w: " + l + w);

    if ( l<=0 || b<= 0) {
        console.log("bad dimensions");
    }
    else {
        console.log("Perimeter is : ", rect.perimeter(l, b));
        console.log("Area is : ", rect.area(l, b));
    }
}

// Better: Solve the Callback Function way -- a common pattern in Node apps, including error handling
function solveRectCallbackWay(l, b) {
    // Same idea as above, but uses a callback for error handling
    // This allows the operation to occur async
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    // Call the rectangle module, and set the l, b, and callback function which has two parameters
    // This callback function is implemented as follows
    // Inside this callback function, you can check to see if these values are returned to you
    // If the error is returned to you, do a console log 
    // If not, we know the rectangle was returned to you so can go ahead and do the operations specified

    // Here we are defining an inner object
    
    rectangle(l, b, (err, recta) => {
        if (err) {
            console.log("Error: ", err.message);
        }
        else {
            // We don't have to assign any parameters to these function calls
            // Because of the concept of CLOSURE, the l and b become x, y
            // They are automatically retrieved from the items that are already created (JS object)
            // The call 
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + recta.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + recta.perimeter());
        }
    });
    console.log("This statement after the call to rect()");


};
solveRectCallbackWay(1, 4);
solveRectCallbackWay(-1, 4);
// solveRectCallbackWay(1, 4);
// solveRectCallbackWay(1, 4);



