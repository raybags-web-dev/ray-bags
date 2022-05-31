//auto gen runners.
const { auto_gen_news, auto_gen_travel_news } = require("../runners/auto_gen_news");

module.exports = async function() {
    console.log("Running Crawlers...");

    try {
        await auto_gen_news();
        await auto_gen_travel_news();
    } catch (e) {
        console.log(e.message);
    }
}