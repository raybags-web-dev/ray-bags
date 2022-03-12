const express = require("express");
const app = express();
const asyncMiddleware = require("./middleware/async");

require("./src/cors/handleCors")(app);
// DB handler.
const connectDB = require("./src/DB/connect");

//env variables
require("dotenv").config();
const { API_KEY, MONGO_URI } = process.env;
// server static resources 

app.use(express.static("dist"));

app.use(express.json());

require("./src/startup/routess").Authenticate_user(app);
require("./src/startup/routess").DeleteUser(app);
require("./src/startup/routess").DeleteCollection(app);
require("./src/startup/routess").GetBreakingNews(app);
require("./src/startup/routess").GetTravelNews(app);
require("./src/startup/routess").CreateAndSaveBreakingNews(app);
require("./src/startup/routess").CreateAndSaveTravelNews(app);

// Not found route
app.all('*', (req, res) => {
    res.status(404).sendFile(__dirname + "/notfound/_404_.html");
});
// handle db connection
(asyncMiddleware(async() => {
    console.log("initializing connection  to server...")
    connectDB(MONGO_URI);
    console.log("======= CONNECTED TO DB ========")
        // Port set-up and start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`app is listening on port ${ PORT }`));
}))();