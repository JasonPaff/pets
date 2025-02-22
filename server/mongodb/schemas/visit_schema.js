﻿const mongoose = require('mongoose');

const visit_schema = new mongoose.Schema({
    additionalCatRate: {type: Number, default: 0},
    additionalDogRate: {type: Number, default: 0},
    baseRate: {type: Number, default: 0},
    bathingRate: {type: Number, default: 0},
    catRate: {type: Number, default: 0},
    holidayRate: {type: Number, default: 0},
    hourlyRate: {type: Number, default: 0},
    puppyRate: {type: Number, default: 0},
    userId: {type: String, required: true},
});

module.exports.Visit = mongoose.model('Visit', visit_schema);