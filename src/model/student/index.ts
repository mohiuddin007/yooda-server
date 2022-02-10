const mongoose = require('mongoose');

const studentModel = mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true
        },
        roll: {
            type: Number,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        class: {
            type: String,
            require: true
        },
        hall: {
            type: String,
            require: true
        },
        status: {
            type: String,
            enum: ['active', 'inActive']
        }
    },
    {
      timestamps: true,
    }
)

const StudentModel = mongoose.model("Student", studentModel);

export = StudentModel;