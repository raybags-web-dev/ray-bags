const mongoose = require("mongoose");
const db = mongoose.connection;

const dropCollections = async(collection) => {
    if (!collection) return console.log("collection name required");
    db.on('error', console.error);
    db.dropCollection(`${collection}`, function(err, result) {
        // error
        if (err) return console.log(`Error: ${err.message}`);
        // success
        console.log(`Success: ${collection} deleted!`);
    });
}
module.exports = { dropCollections };