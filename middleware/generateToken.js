const token = require("crypto").randomBytes(64).toString('hex');

function GenToken() {
    const secretToken = token;
    return secretToken;
};

module.exports = { GenToken };