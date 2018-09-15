var count = (function() {
    var x = 5; // Not available in global scope
    return x
})()

console.log(count) // 5

console.log(x); //Err