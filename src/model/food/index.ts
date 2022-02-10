const mongoose = require('mongoose');

const foodModel = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    },
    {
      timestamps: true,
    }
)

const FoodModel = mongoose.model("Food", foodModel);

export = FoodModel;