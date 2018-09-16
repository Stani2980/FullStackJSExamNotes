promiseFactory = require("./promiseFactory")


// Sequential with Promise.all()
let promises = [promiseFactory("Word", 3000),promiseFactory("Hello map", 2000),promiseFactory("Hello filter", 4000)];

Promise.all(promises)
.then(data => console.log(data.join()))
.catch(err => console.log("ERROR: "+err))