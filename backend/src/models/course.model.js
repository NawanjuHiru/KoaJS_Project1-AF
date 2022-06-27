const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
     
    faculty: {
        type: Boolean,
        required: false,
        default: false,
    },

    course: {
        type: Boolean,
        required: false,
        default: false,
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