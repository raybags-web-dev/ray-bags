const express = require("express");
const app = express();
const connectDB = require("./src/connection");
// database uri
require("dotenv").config();
const { MONGO_URI } = process.env;

app.use(express.static("dist"));
app.use(express.json());

// handle db connection
const start = async () => {
  try {
    console.log("initializing connection  to server...");
    await connectDB(MONGO_URI);
    console.log("======= CONNECTED TO DB ========");
    // Port set-up and start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
  } catch (e) {
    console.error(e.message);
  }
};
start();
