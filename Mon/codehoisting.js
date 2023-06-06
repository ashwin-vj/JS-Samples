
//--------Variable Hoisting-------//
console.log(x); // Op: undefined
var x = 5;

//-----------------------------------------------------------------------

//--------Function Hoisting-------//

sayHello(); // Op: "Hello!"

function sayHello() {
  console.log("Hello!");
}

//------------------------------------------------------------------------

sayHello(); // Op:  Error: sayHello is not a function

var sayHello = function() {
  console.log("Hello!");
};
