var arr = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

// Use existing callbacks
console.log("Filter")
var res = arr.filter((name) => {
    if (name.length <= 3)
        return name
}
)
console.log(res)

console.log("Map")
res = arr.map((name) => {
    return name.toUpperCase()
})

console.log(res)

//Create own filter/map methods
function myFilter(array, callback) {
    var res = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]))
            res.push(array[i])

    }
    return res
}

function filterLenLessThanThree(obj) {
    return obj.length <= 3
}

console.log("myFilter  \n" + myFilter(arr, filterLenLessThanThree))

function myMap(array, callback) {
    var res = []
    for (const obj of array) {
        res.push(callback(obj))
    }
    return res
}

function toUpper(obj) {
    return obj.toUpperCase()
}

console.log("myMap \n" + myMap(arr, toUpper))


var numbers3 = [2, 3, 67, 33];
//Own reduce 
function cbReduce(accumulator, currVal, index, arr) {
    if (index < arr.length - 1) {
        return accumulator + currVal;
    } else {
        let sum = accumulator + currVal;
        return {
            info: "The sum is ",
            sum: sum,
            arr: arr
        }
    }
}

const res2 = numbers3.reduce(cbReduce);
console.log(res2);