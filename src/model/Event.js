const mongoose = require('mongoose');
const validator = require('validator');

const eventSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        imgString: {
            type: String,
            required: true
        },
        schedule: {
            type: String,
            required: true,
            trim: true
        },
        locationCoordinates: {
            type: String,
            required: true,
            trim: true
        }
    },
    {timestamps: true});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
