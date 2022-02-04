const express = require("express");
const app = express();
const cors = require("cors");
// database uri
require("dotenv").config();

app.use(express.static("dist"));
app.use(express.json());
// set origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).send("connected...");
});

// handle db connection
const start = async () => {
  try {
    console.log("initializing connection  to server...");
    // Port set-up and start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
  } catch (e) {
    console.error(e.message);
  }
};
start();
