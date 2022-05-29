const axios = require('axios');
//env variables
require("dotenv").config();
const { MY_TOKEN, NAME, EMAIL, PASSWORD } = process.env;
//create news runner every 24 hours.
const auto_gen_news = async() => {
    const options = {
        url: 'https://raybags.herokuapp.com/scrapper/v1/savenews',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'token': `${MY_TOKEN}`
        },
        data: {
            "name": NAME,
            "email": EMAIL,
            "password": PASSWORD
        }
    };

    const response = await axios(options);
    const { status, statusText } = await response;
    console.log(`Status: ${status} => ${statusText}`);
    console.log(`Message: ${response.data.skynews_content.length} stories has been generated and saved \n =============`);
    console.log(response.data.skynews_content);
}

// create and save travel news every 24 hours
const auto_gen_travel_news = async() => {
    const options = {
        url: 'https://raybags.herokuapp.com/scrapper/v1/save-travelnews',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'token': `${MY_TOKEN}`
        },
        data: {
            "name": NAME,
            "email": EMAIL,
            "password": PASSWORD
        }
    };

    const response = await axios(options);
    const { status, statusText } = await response;
    console.log(`Status: ${status} => ${statusText}`);
    console.log(`Message: ${response.data.travel__a.length} has been generated and saved \n =============`);
    console.log(response.data.travel__a);

}


module.exports = {
    auto_gen_news,
    auto_gen_travel_news

}