const mongoose = require("mongoose");
const { Schema } = mongoose;

const facultySchema = new Schema({

    faculty: {
        type: String,
        required: true,
    },

    dean: {
        type: String,
        required: true,
    },

    codean: {
        type: String,
        required: true,
    },

    lectures: {
        type: Number,
        required: true,
    },

    instructors: {
        type: Number,
        required: true,
    },

    students: {
        type: String,
        required: true,
    },
});

module.exports = Faculty = mongoose,model("Faculty", facultySchema);