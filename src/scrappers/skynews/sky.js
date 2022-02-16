const axios = require("axios");
const cheerio = require("cheerio");

const SKY_NEWS_1 = async function(website_link) {
    if (!website_link) return
        // base url
    try {
        const response = await axios(website_link);
        const data = await response.data;
        const $ = cheerio.load(data);

        let skynews_content = [];

        // heading
        $(".sdc-site-tile__headline", data).each(function() {
            const title = $(this).text().trim();
            const url = `https://news.sky.com${$(this).find("a").attr("href").trim()}`;

            skynews_content.push({
                title,
                url,
            });

        })
        return { skynews_content };
    } catch (error) {
        console.log(error, error.message);
    }
}

const SKY_NEWS_2 = async function(website_link) {
    if (!website_link) return
        // base url
    try {
        const response = await axios(website_link);
        const data = await response.data;
        const $ = cheerio.load(data);

        let skynews_content_2 = [];

        //  caroucel headlines and videos
        $(".sdc-site-carousel__headline", data).each(function() {
            const caroucel_heading = $(this).find("a").text().trim();
            const video_url = `https://news.sky.com${$(this).find("a").attr("href").trim()}`;

            skynews_content_2.push({
                caroucel_heading,
                video_url
            })
        })

        return { skynews_content_2 };
    } catch (error) {
        console.log(error, error.message);
    }
}

module.exports = {
    SKY_NEWS_1,
    SKY_NEWS_2
}