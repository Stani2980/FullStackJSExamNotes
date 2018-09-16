//A 
//fix this, with ES5 then ES6 arrow func
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    // this.nums.forEach(function (v) {
    this.nums.forEach( v => { // The arrow func uses “lexical scoping” (refering to the "closest" scope of this)
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    // },this); // To fix with ES5 we have to use this as an argument
    }); 
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives);
  

//B
//fix using arrow func (not fixing because it does not bind to the right this)
var counter = {
    count: 0,
    inc: function () { 
        this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one
