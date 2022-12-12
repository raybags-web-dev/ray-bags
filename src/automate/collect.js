const { skynews1, skynews2 } = require("../../src/models/SKYNEWS");
const { SKY_NEWS_1, SKY_NEWS_2 } = require("../../src/scrappers/skynews/sky");
const { travel_1news, travel_2news, travel_3news } = require("../../src/models/TRAVELNEWS");

const { OperationsLogger } = require('../../middleware/logger');


const { SKY_1_NEWS_TRAVEL, SKY_2_NEWS_TRAVEL, SKY_3_NEWS_TRAVEL } = require("../../src/scrappers/skynews/travel_news");

const { catch_errors } = require('../../middleware/catch_err');
const { User } = require('../models/User');

require("dotenv").config();
const { MY_TOKEN } = process.env;

module.exports = {
    collectDailyNews: async() => {
        let user = await User.findOne({ token: MY_TOKEN });
        if (!user) return;

        const data = await SKY_NEWS_1('https://news.sky.com');
        const data_2 = await SKY_NEWS_2("https://news.sky.com");

        const { skynews_content } = data;
        const { skynews_content_2 } = data_2;
        // breaking news
        skynews_content.forEach(async(obj) => {
            catch_errors(skynews1.create({
                title: obj.title,
                url: obj.url
            }));
        });
        // news
        skynews_content_2.forEach(async(obj) => {
            catch_errors(skynews2.create({
                caroucel_heading: obj.caroucel_heading,
                video_url: obj.video_url
            }));
        });
        OperationsLogger.info(`Operation name: 'create  & breaking news', statusode: ${200}`)
    },

    collectTravelNews: async() => {
        let user = await User.findOne({ token: MY_TOKEN });
        if (!user) return;

        const travel_1 = await SKY_1_NEWS_TRAVEL("https://news.sky.com/travel");
        const travel_2 = await SKY_2_NEWS_TRAVEL("https://news.sky.com/travel");
        const travel_3 = await SKY_3_NEWS_TRAVEL("https://news.sky.com/travel");

        const { travel__a } = travel_1;
        const { travel__b } = travel_2;
        const { travel__c } = travel_3;
        // breaking travel news
        travel__a.forEach(async(obj) => {
            const { title, url } = obj;
            catch_errors(travel_1news.create({ title, url }));
        });
        // get and save image urls
        travel__b.forEach(async(obj) => {
            const { image_url } = obj;
            catch_errors(travel_2news.create({ image_url }));
        });
        // get and save carocel videos and subtitles
        travel__c.forEach(async(obj) => {
            const { heading, video_url } = obj;
            catch_errors(travel_3news.create({ heading, video_url }));
        });
        OperationsLogger.info(`Operation name: 'create  & travel news news', statusode: ${200}`)
    }
}