const mongoose = require('mongoose');

const distributionModel = mongoose.Schema(
    {
        studentId: {
            type: String,
            require: true
        },
        date: {
            type: String,
            require: true
        },
        shift: {
            type: String,
            require: true
        },
        status: {
            type: String,
            require: true
        },
        foodItemList: {
            type: String,
            require: true
        }
    },
    {
      timestamps: true,
    }
)

const DistributionModel = mongoose.model("Distribution", distributionModel);

export = DistributionModel;