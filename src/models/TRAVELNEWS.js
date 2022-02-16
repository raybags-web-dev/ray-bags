const mongoose = require("mongoose");
// scrapped data object 
const TRAV_1 = {
    title: {
        type: String,
        trim: true,
        maxlength: 500,
        minlength: 1
    },
    url: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 3
    },

}

const TRAV_2 = {
    image_url: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 3
    },

}

const TRAV_3 = {
    heading: {
        type: String,
        trim: true,
        maxlength: 500,
        minlength: 1
    },
    video_url: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 3
    },
}

const TRAV_1_SCHEMA = new mongoose.Schema(TRAV_1, { timestamps: true });
const TRAV_2_SCHEMA = new mongoose.Schema(TRAV_2, { timestamps: true });
const TRAV_3_SCHEMA = new mongoose.Schema(TRAV_3, { timestamps: true });


module.exports = {
    travel_1news: mongoose.model('travel-sky1', TRAV_1_SCHEMA),
    travel_2news: mongoose.model('travel-sky2', TRAV_2_SCHEMA),
    travel_3news: mongoose.model('travel-sky3', TRAV_3_SCHEMA),
}