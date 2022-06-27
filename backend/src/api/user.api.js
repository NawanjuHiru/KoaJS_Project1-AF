const User = require("../models/user.model");
const mongoose = require("mongoose");

const saveUser = async (ctx) => {
    try {
        const {
            fullName,
            email,
            mobileNumber,
            password
        } = ctx.request.body;

        const user = await User.create({
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
            password : password,
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "User Saved Successfully."
            });
    }  catch (error) {
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const updateUser = async (ctx) => {
    try {
        const {
            id,
            fullName,
            email,
            mobileNumber
        } = ctx.request.body;

        const user = await User.findByIdAndUpdate(id, {
            fullName : fullName,
            email : email,
            mobileNumber : mobileNumber,
        });

        return (ctx.body =
            {
                isSuccess : true,
                message : "User updated Successfully."
            });
    } catch (error) {
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const deleteUser = async (ctx) => {
    try {
        const userId = ctx.params.id;

        const query = await User.findByIdAndDelete(userId);

        return (ctx.body =
            {
                isSuccess : true,
                message : "User deleted Successfully."
            });
    } catch (error) {
        return (ctx.body = 
            {
                isSuccess : false,
                message : "Error has been occured. Please try again."
            });
    }
};

const getUserDetails = async (ctx) => {
    try {
        const { searchText } = ctx.request.body;

        if (searchText === "") {
            const userDetails = await User.find().exec();

            return (ctx.body = userDetails);
        } else {
            const userDetails = await User.find({fullName: searchText});

            return (ctx.body = userDetails);
        }
    } catch (error) {

    }
};

module.exports = {saveUser , updateUser , deleteUser , getUserDetails }