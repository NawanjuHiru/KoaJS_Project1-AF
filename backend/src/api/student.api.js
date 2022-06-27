const Student = require("../models/student.model");
const mongoose = require("mongoose");

const saveStudent = async (ctx) => {
    try {
        const {
            registerNumber,
            fullName,
            email,
            address,
            enrollmentYear,
            faculty,
            course
        } = ctx.request.body;

        const student = await Student.create({
            registerNumber : registerNumber,
            fullName : fullName,
            email : email,
            address : address,
            enrollmentYear : enrollmentYear,
            faculty : faculty,
            course : course
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Student saved successfully."
            });

    } catch (error) {
        
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const updateStudent = async (ctx) => {
    try {
        const {
            id,
            registerNumber,
            fullName,
            email,
            address,
            enrollmentYear,
            faculty,
            course
        } = ctx.request.body;

        const student = await Student.findByIdAndUpdate(id,{
            registerNumber : registerNumber,
            fullName : fullName,
            email : email,
            address : address,
            enrollmentYear : enrollmentYear,
            faculty : faculty,
            course : course
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Student updated successfully."
            });

    } catch (error) {
        
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const deleteStudent = async (ctx) => {
    try {
        const studentId = ctx.params.id;

        const query = await Student.findByIdAndDelete(studentId);

        return (ctx.body =
            {
                isSuccess : true,
                message : "Student updated successfully."
            });
    } catch (error) {
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const getStudentDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const studentDetails = await Student.find().exec();

            return (ctx.body = studentDetails);
        } else {
            const studentDetails = await Student.find({registerNumber: searchText});

            return (ctx.body = studentDetails);
        }

    } catch (error) {

    }
};

module.exports = { saveStudent , updateStudent , deleteStudent , getStudentDetails } 