const Staff = require("../models/staff.model");
const mongoose = require("mongoose");

const saveStaff = async (ctx) => {
    try {
        const {
            fullName,
            email,
            mobileNumber,
            password
        } = ctx.request.body;

        const Staff = await Staff.create({
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
            password : password
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "Staff has been saved successfully."
            });
    } catch (error) {
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const updateStaff = async (ctx) => {
    try {
        const {
            fullName,
            email,
            mobileNumber
        } = ctx.request.body;

        const Staff = await Staff.findByIdAndUpdate(id,{
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber
        });

        return (ctx.body = 
            {
                isSuccess : true,
                message : "Staff updated Successfully."
            });
    } catch (error)  {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const deleteStaff = async (ctx) => {
    try {
        const staffId = ctx.params.id;

        const query = await Staff.findByIdAndDelete(staffId);

        return (ctx.body = 
            {
                isSuccess : true,
                message : "Staff deleted Successfully."
            });
    } catch (error)  {
        return (ctx.body =
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const getStaffDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const staffDetails = await Staff.find().exec();

            return (ctx.body = staffDetails);
        } else {
            const staffDetails = await Staff.find({fullName : searchText});

            return (ctx.body = staffDetails);
        }
    } catch (error) {

    }
};

const getStaffById = async (ctx) => {
    try {
        const staffId = ctx.params.id;

        const staff = await Staff.findById(staffId);

        return (ctx.body = staff);
    } catch (error) {

    }
};

module.exports = { saveStaff, updateStaff, deleteStaff, getStaffDetails, getStaffById }