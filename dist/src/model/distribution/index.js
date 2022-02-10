"use strict";
var mongoose = require('mongoose');
var distributionModel = mongoose.Schema({
    studentId: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    shift: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    foodItemList: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});
var DistributionModel = mongoose.model("Distribution", distributionModel);
module.exports = DistributionModel;
