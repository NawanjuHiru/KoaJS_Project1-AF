const Students = require("../models/student");
const parse = require('co-body');

const getStudents = async (ctx) => {
	try {
		const results = await Students.find();
		ctx.body = results;
		ctx.status = 200;
	} catch (e) {
		console.log(e);
		ctx.status = 500;
		throw e;
	}
};

const addStudent = async (ctx) => {
	try {
		await Students.create(ctx.request.body);
		ctx.body = "Student added to the system successfully!";
		ctx.status = 201;
	} catch (e) {
		console.log(e);
		ctx.status = 500;
		throw e;
	}
};

const getStudent = async (ctx) => {
	const { id } = ctx.params;
	try {
		const student = await Students.findById(id).exec();
		if (!student) {
			ctx.status = 404;
			return;
		}
		ctx.body = student;
	} catch (e) {
		console.log(e);
		ctx.status = 500;
		throw e;
	}
};

const updateStudent = async (ctx) => {
	const filter = { id: ctx.params.id || 'invalid'};
	const stdObj = {
		name: ctx.request.body.name,
		age: ctx.request.body.age,
		gender: ctx.request.body.gender,
		contact: ctx.request.body.contact,
		address: ctx.request.body.address
	};
	Students.findByIdAndUpdate(filter, stdObj, (error, stdDetails) => {
		console.log(filter);
		console.log(ctx.request.body.id)
			!stdDetails ?
			ctx.status = 404;
			ctx.status = 200;
	});
}

const deleteStudent = (ctx) => {
  const { id } = ctx.params;
  try {
    Students.findByIdAndRemove(id, (result) => {
      console.log(result); 
    })
  } catch (e) {
    ctx.status = 500;
    throw e;
  }
};

module.export = {
	getStudents,
	addStudent,
	getStudent,
	updateStudent,
	deleteStudent
};