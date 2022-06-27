const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({

    registerNumber: {
        type: String,
        required: true,
    },

    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    enrollmentYear: {
        type: String,
        required: true,
    },

    faculty: {
        type: String,
        required: true,
    },

    course: {
        type: String,
        required: true,
    },
});

module.exports = Student = mongoose,model("Student", studentSchema);