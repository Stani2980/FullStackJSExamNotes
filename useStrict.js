"use strict" //uncomment for function example

var x; // this is required
x = "this is what ESLint prevents"

console.log(x)


myFunction();

// "use strict" is function scoped
function myFunction() {
    "use strict"
    y = 3.14;   // This will also cause an error because y is not declared
    console.log(y)    
}