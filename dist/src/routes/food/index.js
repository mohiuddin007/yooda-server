"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var food_1 = __importDefault(require("../../controller/food"));
var express = require('express');
var router = express.Router();
var food = new food_1.default();
router.get('/', food.getAllFood);
router.post('/', food.saveFood);
router.put('/:id', food.updateFood);
router.delete('/:id', food.deleteFood);
module.exports = router;
