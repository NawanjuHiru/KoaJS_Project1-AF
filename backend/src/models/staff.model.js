const mongoose = required("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema ({

    fullName: {
        type : String,
        required : true,
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
});

module.exports = Staff = mongoose,model("Staff" , staffSchema);