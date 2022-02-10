import FoodClass from "../../controller/food";

const express = require('express');

const router = express.Router();

const food = new FoodClass();

router.get('/', food.getAllFood);
router.post('/', food.saveFood);
router.put('/:id', food.updateFood);
router.delete('/:id', food.deleteFood);

export = router;