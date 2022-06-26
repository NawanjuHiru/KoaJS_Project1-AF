const mongoose = require("mongoose");
const { Schema } = mongoose;
//const jwt = require("jsonwebtoken");

const userSchema = new Schema({

    fullname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    mobileNumber: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    createdOn: {
        type: Date,
        required: true,
    },

    createdBy: {
        type: String,
        required: true,
    },

    updatedOn: {
        type: Date,
        required: true,
    },

    updatedBy: {
        type: String,
        required: true,
    },

    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    },
});

userSchema.methods.generateJWTToken = async function () {
    const user = this;
    const jwtSecret = process.env.jwtPrivateKey;

    const token = jwt.sign({ _id: user._id }, jwtSecret);
    user.token = token;
    return token;
};

module.exports = User = mongoose,model("User", userSchema);