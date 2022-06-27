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
};

const updateFaculty = async (ctx) => {
    try {
        const {
            id,
            facultyName,
            dean,
            codean,
            lectures,
            instructors,
            students
        } = ctx.request.body;

        const faculty = await Faculty.findByIdAndUpdate(id,{
            facultyName : facultyName,
            dean : dean,
            codean : codean,
            lectures : lectures,
            instructors : instructors,
            students : students,
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Faculty have been updated sucecessfully."
            })
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            })
    }
};

const deleteFaculty = async (ctx) => {
    try {
        const facultyId = ctx.params.id;

        const query = await Faculty.findByIdAndDelete(facultyId);

        return (ctx.body =
            {
                isSuccess : true,
                message : "Faculty have been deleted sucecessfully."
            })
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            })
        }
};

const getFacultyDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const facultyDetails = await Faculty.find().exec();

            return (ctx.body = facultyDetails);
        } else {
            const facultyDetails = await Faculty.find({facultyName: searchText});

            return (ctx.body = facultyDetails);
        }

    } catch (error) {

    }
};

module.exports = { saveFaculty , updateFaculty , deleteFaculty , getFacultyDetails }