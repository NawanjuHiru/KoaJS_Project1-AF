const mongoose = require("mongoose");
const { Schema } = mongoose;

const lectureSchema = new Schema({

    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    mobileNumber: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    isLceture: {
        type: Boolean,
        required: false,
        default: false,
    },

    faculty: {
        type: String,
        required: true,
    },
});

module.exports = Lecture = mongoose,model("Lecture", lectureSchema);