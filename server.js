const express = require("express");
const app = express();
const asyncMiddleware = require("./middleware/async");
const cron = require('node-cron');
const cronJobs = require("./src/cronjobs/cron_jobs");

require("./src/cors/handleCors")(app);
// DB handler.
const connectDB = require("./src/DB/connect");
// job runner
const job_runner = require("./src/job_runner/job_runner");

//env variables
require("dotenv").config();
const { API_KEY, MONGO_URI, } = process.env;

// server static resources 
app.use(express.static("dist"));

app.use(express.json());

//authentication route
require("./src/startup/routess").Authenticate_user(app);
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
// RUN CRON JOBS TOP CRAWL NEWS DAILY EVERY 24 HOURS.
cron.schedule(cronJobs.daily, job_runner);
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