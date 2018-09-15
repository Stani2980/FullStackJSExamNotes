const pathDir = process.argv[2];
const ext = process.argv[3];

const readFileExtFilter = require("./filterModuleEx6")

readFileExtFilter(pathDir,ext, (err, data) => {
    if(err){
        console.log("error")
        console.log(err)
    }
    console.log(data.join("\n"))
});

//TO RUN $node modules.js <path> <extension>

//$node modules.js ../ js