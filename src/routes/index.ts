import express from "express";
import food from './food';
import distribution from './distribution';
import student from './student';

const router = express.Router();

//all topic routes
router.use('/food', food);
router.use('/student', student);
router.use('/distribution', distribution);

export = router;
