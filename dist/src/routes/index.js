"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var food_1 = __importDefault(require("./food"));
var distribution_1 = __importDefault(require("./distribution"));
var student_1 = __importDefault(require("./student"));
var router = express_1.default.Router();
//all topic routes
router.use('/food', food_1.default);
router.use('/student', student_1.default);
router.use('/distribution', distribution_1.default);
module.exports = router;
