let numbers = [3, 5, 4, 5, -2];

//PrototypeMap
Array.prototype.myMap2 = function (cb) {
    let tmp = [];
    for (var i = 0; i < this.length; i++) {
        let num = cb(this[i], i, this);
        tmp.push(num);
    }
    return tmp;
}

function cbTimesMinusTen(number) {
    return number * -10;
}

console.log(numbers.myMap2(cbTimesMinusTen) + " Prototype Map");
console.log();
