// Hoisting
x = 12;//Move console.log() above x or change var to let

console.log(x);

myFunc();
myFunc2(); // Not hoisted as the var is hoisted but not declared a value.

function myFunc(){
    console.log("hello from function that has been hoisted")
}

var myFunc2 = function (){
    console.log("hello from function that did not")
}

var x; // Change to let for not hoisted