"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var student_1 = __importDefault(require("../../controller/student"));
var express = require('express');
var router = express.Router();
var student = new student_1.default();
router.get('/', student.getAllStudent);
router.post('/', student.saveStudent);
router.put('/:id', student.updateStudent);
router.delete('/:id', student.deleteStudent);
module.exports = router;
