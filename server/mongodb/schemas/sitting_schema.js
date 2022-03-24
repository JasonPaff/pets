﻿const mongoose = require('mongoose');

const sitting_schema = new mongoose.Schema({
    additionalCatRate: {type: Number, default: 0},
    additionalDogRate: {type: Number, default: 0},
    baseRate: {type: Number, default: 0},
    catRate: {type: Number, default: 0},
    extendedCareRate: {type: Number, default: 0},
    holidayRate: {type: Number, default: 0},
    pickUpDropOffRate: {type: Number, default: 0},
    puppyRate: {type: Number, default: 0},
    userId: {type: String, required: true},
});

module.exports.Sitting = mongoose.model('Sitting', sitting_schema);