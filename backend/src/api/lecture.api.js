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
};

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
};

const deleteLecture = async (ctx) => {
    try {
        const lectureId = ctx.params.id;

        const query = await Lecture.findByIdAndDelete(lectureId);

        return (ctx.body =
            {
                isSuccess : true,
                message : "Lecture has been deleted successfully."
            });
    } catch (error) {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const getLectureDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const lectureDetails = await Lecture.find().exec();

            return (ctx.body = lectureDetails);
        } else {
            const lectureDetails = await Lecture.find({fullName: searchText});

            return (ctx.body = lectureDetails);
        }

    } catch (error) {

    }
};

const getLectureById = async (ctx) => {
    try {
        const lectureId = ctx.params.id;

        const lecture = await Lecture.findById(lectureId);

        return (ctx.body = lecture);
    } catch (error) {

    }
};

module.exports = { saveLecture , updateLecture , deleteLecture , getLectureDetails , getLectureById }