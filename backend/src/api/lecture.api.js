const Lecture = require("../models/lecture.model");
const mongoose = require("mongoose");

const saveLecture = async (ctx) => {
    try {
        const {
            fullName,
            email,
            mobileNumber,
            address,
            isLecture,
            faculty
        } = ctx.request.body;

        const lecture = await Lecture.create({
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
            address : address,
            isLecture : isLecture,
            faculty : faculty
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Lecture has been saved successfully."
            });

    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
}

const updateLecture = async (ctx) => {
    try {
        const {
            id,
            fullName,
            email,
            mobileNumber,
            address,
            isLecture,
            faculty
        } = ctx.request.body;

        const lecture = await Lecture.findByIdAndUpdate(id,{
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
            address : address,
            isLecture : isLecture,
            faculty : faculty
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Lecture has been updated successfully."
            });

    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
}

module.exports = { saveLecture , updateLecture}