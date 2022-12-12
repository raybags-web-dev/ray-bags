const mongoose = require("mongoose");
// scrapped data object 
const skyNewsObject = {
    title: {
        type: String,
        trim: true,
        maxlength: 500,
        minlength: 1,
        unique: true
    },
    url: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 1,
        unique: true
    },
}

// scrapped data object 
const sky2NewsObject = {
    caroucel_heading: {
        type: String,
        trim: true,
        maxlength: 500,
        minlength: 1,
        unique: true

    },
    video_url: {
        type: String,
        trim: true,
        maxlength: 200,
        minlength: 1,
        unique: true
    },
}

// scrapped data schema 
const Skynews1Schema = new mongoose.Schema(skyNewsObject, { timestamps: true, unique: true, dropDupes: true });
const Skynews2Schema = new mongoose.Schema(sky2NewsObject, { timestamps: true, unique: true, dropDupes: true });

module.exports = {
        skynews1: mongoose.model('sky-news1', Skynews1Schema),
        skynews2: mongoose.model('sky-news2', Skynews2Schema)
    }
    // schemas