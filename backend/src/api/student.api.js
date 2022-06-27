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
}

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
}

module.exports = { saveStudent , updateStudent}