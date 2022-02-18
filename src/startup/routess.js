const { User } = require("../models/User");

const { SKY_NEWS_1, SKY_NEWS_2 } = require("../../src/scrappers/skynews/sky");
const { GenToken } = require("../../middleware/generateToken");
// scrapper handlers.
const {
    SKY_1_NEWS_TRAVEL,
    SKY_2_NEWS_TRAVEL,
    SKY_3_NEWS_TRAVEL
} = require("../../src/scrappers/skynews/travel_news");

const asyncMiddleware = require("../../middleware/async");
const { dropCollections } = require("../../middleware/dropCollection")
const { skynews1, skynews2 } = require("../../src/models/SKYNEWS");
const { travel_1news, travel_2news, travel_3news } = require("../../src/models/TRAVELNEWS");


// AUTHENTICATION
const Authenticate_user = function(app) {
        app.post("/authenticate", asyncMiddleware(async(req, res) => {
            const secretToken = await GenToken();

            let user = await User.findOne({
                email: req.body.email
            });
            if (req.body.email == "raybags@github.com" || req.body.name == "Raymond Baguma") return res.status(500).send("this is a demo account. use your email address please")

            if (user) return res.status(400).json({ message: "User already exists! This is your token", token: user.token });

            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                token: secretToken
            });
            res.status(201).json({ body: req.email, "your-token": secretToken });
        }));

    }
    // Delete user
const DeleteUser = function(app) {
        app.delete("/delete-your-user-account", asyncMiddleware(async(req, res) => {
            let requestBody = req.body;
            if (!requestBody)
                return res.status(401).json("name, email and password required to delete account");

            if (requestBody.email == "" || requestBody.password == "")
                return res.status(400).json("name, email and password can't be empty string");

            let deletedUser = await User.findOne({ email: requestBody.email });
            if (!deletedUser) return res.status(401).json("these credentials have been deleted or do not exist");

            // get user from the database by their access token
            let user = await User.findOneAndDelete({
                email: requestBody.email,
                password: requestBody.password
            });
            res.status(200).json({ message: { account: req.body, details: `All done "${user.name}!!" Your account has been deleted.` } });
        }))
    }
    //Delete collection
const DeleteCollection = function(app) {
        app.delete(`/scrapper/v1/sky-news/:collection`, asyncMiddleware(async(req, res) => {
            let requestBody = req.body;
            if (requestBody.token == "")
                return res.status(401).json("Empty string! A token is required for this operation");
            // get user from the database by their access token
            let user = await User.findOne({
                token: requestBody.token,
            });
            if (!user)
                return res.status(404).json("you are not authorized to delete this resource");

            if (user.token == 'null') return res.status(500).json("Token can't be an empty string!");

            if (requestBody.token != user.token)
                return res.status(401).json("This token is invalid or expired");

            const { collection } = req.params;
            await dropCollections(collection);
            res.status(200).send("success");
        }));
    }
    // Get breaking news
const GetBreakingNews = function(app) {
    // skynew breaking news
    app.get("/scrapper/v1/sky-breaking-news", asyncMiddleware(async(req, res) => {
        const newsBreaking1 = await skynews1.find({}),
            newsBreaking2 = await skynews2.find({});
        res.status(200).json({ newsBreaking1, newsBreaking2 });
    }));
}
const GetTravelNews = function(app) {
    // skynew travel news
    app.get("/scrapper/v1/sky-travel-news", asyncMiddleware(async(req, res) => {
        const newsTravelOne = await travel_1news.find({}),
            newsTravelTwo = await travel_2news.find({}),
            newsTravelThree = await travel_3news.find({});
        res.status(200).json({ newsTravelOne, newsTravelTwo, newsTravelThree });
    }));
}

const CreateAndSaveBreakingNews = function(app) {
    // ======== SAVE BREAKING SKY-NEWS ============= //
    app.post("/scrapper/v1/savenews", asyncMiddleware(async(req, res) => {
        let requestBody = req.body;
        if (requestBody.token == "")
            return res.status(401).json("Empty string! To Scrape this website you need a token");
        // get user from the database by their access token
        let user = await User.findOne({
            token: requestBody.token,
        });
        if (!user)
            return res.status(404).json("you are not authorized to use this resource");

        if (user.token == 'null' || requestBody.token != user.token)
            return res.status(401).json("This token is invalid or expired");

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

}

const CreateAndSaveTravelNews = function(app) {
    // ======== SAVE FINANCIAL SKY-NEWS ============= //
    app.post("/scrapper/v1/save-travelnews", asyncMiddleware(async(req, res) => {
        let requestBody = req.body;
        if (requestBody.token == "")
            return res.status(401).json("Empty string! To Scrape this website you need a token");
        // get user from the database by their access token
        let user = await User.findOne({
            token: requestBody.token,
        });
        if (!user)
            return res.status(404).json("you are not authorized to use this resource");

        if (user.token == 'null' || requestBody.token != user.token)
            return res.status(401).json("This token is invalid or expired");
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
}

module.exports = {
    Authenticate_user,
    DeleteUser,
    DeleteCollection,
    GetBreakingNews,
    GetTravelNews,
    CreateAndSaveBreakingNews,
    CreateAndSaveTravelNews
}