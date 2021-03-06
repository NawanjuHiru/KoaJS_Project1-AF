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
};

const updateCourse = async (ctx) => {
    try {
        const {
            id,
            faculty,
            course,
            fee,
            startDate,
            reviewDate
        } = ctx.request.body;

        const Course = await Course.findByIdAndUpdate(id,{
            faculty : faculty,
            course : course,
            fee : fee,
            startDate : startDate,
            reviewDate : reviewDate,
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Course has been updated successfully."
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const deleteCourse = async (ctx) => {
    try {
        const courseId = ctx.params.id;

        const query = await Course.findByIdAndDelete(courseId);

        return (ctx.body =
            {
                isSuccess : true,
                message : "Course has been deleted successfully."
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const getCourseDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if(searchText === ""){
            const courseDetails = await Course.find().exec();

            return (ctx.body = courseDetails);
        } else {
            const courseDetails = await Course.find({course: searchText});

            return (ctx.body = courseDetails);
        }

    } catch (error) {

    }
};

const getCourseById = async (ctx) => {
    try {
        const courseId = ctx.params.id;

        const course = await Course.findById(courseId);

        return (ctx.body = course);
    } catch (error) {

    }
};

module.exports = {saveCourse , updateCourse , deleteCourse , getCourseDetails , getCourseById }