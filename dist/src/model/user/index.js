"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    ban: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: [
            "admin",
            "branch",
            "merchant",
        ],
        required: true,
    },
}, {
    timestamps: true,
});
var People = mongoose.model("People", peopleSchema);
module.exports = People;
