const Course = require("../models/course.model");
const mongoose = require("mongoose");

const saveCourse = async (ctx) => {
    try {
        const {
            faculty,
            course,
            fee,
            startDate,
            reviewDate
        } = ctx.request.body;

        const Course = await Course.create({
            faculty : faculty,
            course : course,
            fee : fee,
            startDate : startDate,
            reviewDate : reviewDate
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Course has been saved successfully."
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
}

module.exports = {saveCourse}