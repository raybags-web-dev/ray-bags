const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');

const crypto = require('crypto');

const headers = require('../../ebikozesebwa/headers/headers');
const { getProxy } = require('../../ebikozesebwa/proxies/proxie_list');



const amazon_daily_deal_product = async function(URL) {
    try {
        return 1;

    } catch (e) {
        console.log(e.message);
    }

}

module.exports = {
    amazon_daily_deal_product
}