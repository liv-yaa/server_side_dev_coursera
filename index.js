const rectangle = require('./rectangle'); //require it

// console.log(rectangle.name);
// Use the module's functions (defined in module.exports)
// console.log("rectagle module works: ", rectangle.perimeter(2, 3));
// console.log("rectagle module works: ", rectangle.area(2, 3));

// https://www.coursera.org/learn/server-side-nodejs/lecture/dUnyG/exercise-video-understanding-node-modules

// Create a JavaScript Object
var rect = {
    perimeter: (x, y) => rectangle.perimeter(x, y),
    area: (x, y) => rectangle.area(x, y),
}

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


function solveRectCallbackWay(l, b) {
    // Same idea as above, but uses a callback for error handling
    // This allows the operation to occur async
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rectangle(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    // console.log("This statement after the call to rect()");


};
solveRectCallbackWay(1, 4);
solveRectCallbackWay(-1, 4);
// solveRectCallbackWay(1, 4);
// solveRectCallbackWay(1, 4);



