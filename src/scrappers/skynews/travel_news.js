const axios = require("axios");
const cheerio = require("cheerio");



const SKY_1_NEWS_TRAVEL = async function(website_link) {
    if (!website_link) return
        // base url
    try {
        const response = await axios(website_link);
        const data = await response.data;
        const $ = cheerio.load(data);

        let travel__a = [];

        // // heading and url
        $(".sdc-site-tile__headline", data).each(function() {
            const title = $(this).find("a").find("span").text().trim();
            const url = `https://news.sky.com${$(this).find("a").attr("href").trim()}`;

            travel__a.push({
                title,
                url,
            });

        })
        return { travel__a };
    } catch (error) {
        console.log(error, error.message);
    }
}

const SKY_2_NEWS_TRAVEL = async function(website_link) {
    if (!website_link) return
        // base url
    try {
        const response = await axios(website_link);
        const data = await response.data;
        const $ = cheerio.load(data);

        let travel__b = [];

        // headline images
        $(".sdc-site-tile__image-wrap", data).each(function() {
            // image_url
            const image_url = `https://news.sky.com${$(this).find("picture").find("img").attr("src").trim()}`;
            //push resource into array
            travel__b.push({
                image_url
            });

        })

        return { travel__b };
    } catch (error) {
        console.log(error, error.message);
    }
}


const SKY_3_NEWS_TRAVEL = async function(website_link) {
    if (!website_link) return
        // base url
    try {
        const response = await axios(website_link);
        const data = await response.data;
        const $ = cheerio.load(data);

        let travel__c = [];

        // caroucel headlines and videos
        $(".sdc-site-tile__headline", data).each(function() {
            const heading = $(this).find("a").find("span").text().trim();
            const video_url = `https://news.sky.com${$(this).find("a").attr("href").trim()}`;
            travel__c.push({
                heading,
                video_url
            });
        });
        return { travel__c };
    } catch (error) {
        console.log(error, error.message);
    }
}

module.exports = {
    SKY_1_NEWS_TRAVEL,
    SKY_2_NEWS_TRAVEL,
    SKY_3_NEWS_TRAVEL
}