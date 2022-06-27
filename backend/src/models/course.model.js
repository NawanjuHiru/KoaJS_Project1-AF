const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
     
    faculty: {
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },

    fee: {
        type: Number,
        required: true,
    },

    startDate: {
        type: Date,
        required: true,
    },

    reviewDate: {
        type: Date,
        required: true,
    },
})

module.exports = Course = mongoose,model("Course", courseSchema);