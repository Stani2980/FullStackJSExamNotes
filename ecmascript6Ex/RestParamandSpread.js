module.exports = function f(x, y, ...rest) {
    let res = "Sum: " + (x + y)

    res += rest.map((obj, index) => {
        return `\nRest value ${index + 1} is a: ${obj.constructor.name}`;
    }).join("")
    return res

}


// console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

// var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
// var restParams = [...rest];
// console.log(f(5, 2, ...restParams));

// var chars = [...f(5, 2, ...restParams)]
// console.log();
// console.log(chars);

// module.exports = resVal