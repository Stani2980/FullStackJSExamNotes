const fs = require("fs");
const path = require("path");

function readFileExtFilter(pathDir, ext, cb) {
    fs.readdir(pathDir, (err, list) => {
        if (err) {
            return cb(err, null)
        }
        const res = list.filter(file => path.extname(file) === "." + ext)

        return cb(null, res)

    })
}

module.exports = readFileExtFilter