﻿const mongoose = require('mongoose');

const host_schema = new mongoose.Schema({
    cancellationPolicy: {type: String, default: ' '},
    canHostMultiplePets: {type: Boolean, default: false},
    canHostUnspayedFemales: {type: Boolean, default: false},
    daysAvailable: {type: String, default: ' '},
    doesBoarding: {type: Boolean, default: false},
    doesHouseSitting: {type: Boolean, default: false},
    doesDropInVisits: {type: Boolean, default: false},
    doesDayCare: {type: Boolean, default: false},
    doesDogWalking: {type: Boolean, default: false},
    experience: {type: String, default: ' '},
    hasChildren: {type: Boolean, default: false},
    hasOtherPets: {type: Boolean, default: false},
    isHomeFullTime: {type: Boolean, default: false},
    isSmoking: {type: Boolean, default: false},
    range: {type: Number, default: 10},
    schedule: {type: String, default: ' '},
    sizeCanHost: {type: String, default: 'All'},
    totalCanHost: {type: Number, default: 1},
    typeOfHome: {type: String, default: 'House'},
    typeOfYard: {type: String, default: ' '},
    userId: {type: String, required: true},
});

module.exports.Host = mongoose.model('Host', host_schema);