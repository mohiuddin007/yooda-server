"use strict";
var mongoose = require('mongoose');
var studentModel = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    roll: {
        type: Number,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    class: {
        type: String,
        require: true
    },
    hall: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
}, {
    timestamps: true,
});
var StudentModel = mongoose.model("Student", studentModel);
module.exports = StudentModel;
