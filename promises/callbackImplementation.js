const crypto = require('crypto');

const cbGetRandomSecure = (SIZE, cb) => {

    crypto.randomBytes(SIZE, function (err, buffer) {
        let secureHex = buffer.toString('hex')
        if (secureHex) {
            cb(null, secureHex);
        } else {
            cb(err, null);
        }
    });
}

module.exports = cbGetRandomSecure;