"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var distribution_1 = __importDefault(require("../../controller/distribution"));
var express = require('express');
var router = express.Router();
var distribution = new distribution_1.default();
router.get('/', distribution.getAllDistribution);
router.post('/', distribution.saveDistribution);
router.put('/:id', distribution.updateDistribution);
router.delete('/:id', distribution.deleteDistribution);
module.exports = router;
