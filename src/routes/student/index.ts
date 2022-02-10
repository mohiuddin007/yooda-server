import StudentClass from "../../controller/student";

const express = require('express');

const router = express.Router();

const student = new StudentClass();

router.get('/', student.getAllStudent);
router.post('/', student.saveStudent);
router.put('/:id', student.updateStudent);
router.delete('/:id', student.deleteStudent);
router.put('/multipleUpdate', student.updateMultipleStudent);

export = router;