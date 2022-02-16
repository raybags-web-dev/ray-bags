const express = require("express");
const app = express();
const cors = require("cors");

// DB handler.
const connectDB = require("./src/DB/connect");
const { dropCollections } = require("./middleware/dropCollection");
// scrapper handlers.
const { SKY_NEWS_1, SKY_NEWS_2 } = require("./src/scrappers/skynews/sky");
const {
    SKY_1_NEWS_TRAVEL,
    SKY_2_NEWS_TRAVEL,
    SKY_3_NEWS_TRAVEL
} = require("./src/scrappers/skynews/travel_news");

// error handler
const asyncMiddleware = require("./middleware/async");

// models
const { skynews1, skynews2 } = require("./src/models/SKYNEWS");
const { travel_1news, travel_2news, travel_3news } = require("./src/models/TRAVELNEWS");

//env variables
require("dotenv").config();
const { API_KEY, MONGO_URI } = process.env;
// server static resources 
app.use(express.static("dist"));
app.use(express.json());

// set CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT"],
        credentials: true,
    })
);

// DROP COLLECTIONS
app.delete(`/raybags.com/scrapper/v1/sky-news/:collection`, asyncMiddleware(async(req, res) => {
    const { collection } = req.params;
    await dropCollections(collection);
    res.status(200).send("success");
}));
// skynew breaking news
app.get("/raybags.com/scrapper/v1/sky-breaking-news", asyncMiddleware(async(req, res) => {
    const newsBreaking1 = await skynews1.find({}),
        newsBreaking2 = await skynews2.find({});

    res.status(200).json({ newsBreaking1, newsBreaking2 });
}));
// skynew travel news
app.get("/raybags.com/scrapper/v1/sky-travel-news", asyncMiddleware(async(req, res) => {
    const newsTravelOne = await travel_1news.find({}),
        newsTravelTwo = await travel_2news.find({}),
        newsTravelThree = await travel_3news.find({});
    res.status(200).json({ newsTravelOne, newsTravelTwo, newsTravelThree });
}));


// ======== SAVE BREAKING SKY-NEWS ============= //
app.post("/raybags.com/scrapper/v1/savenews", asyncMiddleware(async(req, res) => {
    const data = await SKY_NEWS_1('https://news.sky.com');
    const data_2 = await SKY_NEWS_2("https://news.sky.com");

    const { skynews_content } = data;
    const { skynews_content_2 } = data_2;
    // breaking news
    skynews_content.forEach(async(obj) => {
        await skynews1.create({
            title: obj.title,
            url: obj.url
        });
    });
    // news
    skynews_content_2.forEach(async(obj) => {
        await skynews2.create({
            caroucel_heading: obj.caroucel_heading,
            video_url: obj.video_url
        });
    });
    res.status(201).json({ skynews_content, skynews_content_2 });
}));


// ======== SAVE FINANCIAL SKY-NEWS ============= //
app.post("/raybags.com/scrapper/v1/save-travelnews", asyncMiddleware(async(req, res) => {
    const travel_1 = await SKY_1_NEWS_TRAVEL("https://news.sky.com/travel");
    const travel_2 = await SKY_2_NEWS_TRAVEL("https://news.sky.com/travel");
    const travel_3 = await SKY_3_NEWS_TRAVEL("https://news.sky.com/travel");

    const { travel__a } = travel_1;
    const { travel__b } = travel_2;
    const { travel__c } = travel_3;

    // breaking travel news
    travel__a.forEach(async(obj) => {
        const { title, url } = obj;
        await travel_1news.create({
            title,
            url
        });
    });
    // get and save image urls
    travel__b.forEach(async(obj) => {
        const { image_url } = obj;
        await travel_2news.create({
            image_url
        });
    });
    // get and save carocel videos and subtitles
    travel__c.forEach(async(obj) => {
        const { heading, video_url } = obj;
        await travel_3news.create({
            heading,
            video_url
        });
    });
    res.status(201).json({ travel__a, travel__b, travel__c });
}));

// terminate if no api key
if (!API_KEY) return console.warn(` [Error]: API key is required....`), process.exit(1);
// handle db connection
const handleConnection = async() => {
    try {
        console.log("initializing connection  to server...")
        connectDB(MONGO_URI);
        console.log("======= CONNECTED TO DB ========")
            // Port set-up and start server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`app is listening on port ${ PORT }`));
    } catch (e) {
        console.error(e.message);
    }
};
handleConnection();