const { Schema, model } = require("../db-con");

const studentSchema = new Schema({
	id: { type: String, require: true },
	name: { type: String, require: true },
	age: { type: String },
	gender: { type: String },
	contact: { type: String },
	address: { type: String }
});

const Students = new ("Students", studentSchema);

module.exports = Students;