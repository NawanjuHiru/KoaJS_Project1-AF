const Faculty = require("../models/faculty.model");
const mongoose = require("mongoose");

const saveFaculty = async (ctx) => {
    try {
        const {
            facultyName,
            dean,
            codean,
            lectures,
            instructors,
            students
        } = ctx.request.body;

        const faculty = await Faculty.create({
            facultyName : facultyName,
            dean : dean,
            codean : codean,
            lectures : lectures,
            instructors : instructors,
            students : students
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Faculty have been saved sucecessfully."
            })
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            })
    }
}

module.exports = { saveFaculty }