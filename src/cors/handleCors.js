const cors = require("cors");

module.exports = function(app) {
    // set CORS
    app.use(
        cors({
            origin: "*",
            methods: ["GET", "POST", "PUT"],
            credentials: true,
        })
    );
}