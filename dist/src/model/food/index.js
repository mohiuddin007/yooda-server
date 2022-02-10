"use strict";
var mongoose = require('mongoose');
var foodModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
});
var FoodModel = mongoose.model("Food", foodModel);
module.exports = FoodModel;
