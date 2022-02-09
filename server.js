const express = require("express");
const app = express();
const cors = require("cors");
// database uri
require("dotenv").config();
const { API_KEY } = process.env;

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

app.get("/raybags.com", (req, res) => {
    res.status(200).json("works...");
    app.use(express.static("dist"));
});

// handle db connection
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));