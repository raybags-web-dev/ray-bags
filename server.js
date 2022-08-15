const express = require("express");
const app = express();
const asyncMiddleware = require("./middleware/async");

require("./src/cors/handleCors")(app);
// DB handler.
const connectDB = require("./src/DB/connect");
//env variables
require("dotenv").config();
const { API_KEY, MONGO_URI, } = process.env;

// Not available for now
app.all('*', (req, res) => res.status(202).sendFile(__dirname + "/notfound/not_available.html"));
// server static resources 
app.use(express.static("public"));
app.use(express.json());

//authentication route
require("./src/startup/routess").Authenticate_user(app);
// get user
require("./src/startup/routess").Get_user(app);
//delete route
require("./src/startup/routess").DeleteUser(app);
//delete entire collection route
require("./src/startup/routess").DeleteCollection(app);
//get breaking news route
require("./src/startup/routess").GetBreakingNews(app);
//get travel news route
require("./src/startup/routess").GetTravelNews(app);
//crawl and save news route
require("./src/startup/routess").CreateAndSaveBreakingNews(app);
//create and save travel news route
require("./src/startup/routess").CreateAndSaveTravelNews(app);
// Not found route
app.all('*', (req, res) => res.status(404).sendFile(__dirname + "/notfound/_404_.html"));
// handle db connection
(asyncMiddleware(async() => {
    console.log("initializing connection  to server...");
    connectDB(MONGO_URI);
    console.log("======= CONNECTED TO DB ========");
    // Port set-up and start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`app is listening on port ${ PORT }`));
}))();