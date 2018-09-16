//A switch variable values
let fName = "Kurt", lName = "Wonnegut";

[fName, lName] = [lName, fName]

console.log(`First: ${fName}, Last: ${lName}`);

//B 
function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

var {lastName, phone} = getPerson();
console.log(lastName, phone)