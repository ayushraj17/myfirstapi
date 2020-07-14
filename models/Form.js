const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
	"name": String,
	"position": String,
	// name: {
	// 	type: String,
	// 	required: true,
	// },
	// position: {
	// 	type: String,
	// 	required: true,
	// },
	// industry: {
	// 	type: String,
	// 	required: true,
	// },
	// skill: {
	// 	type: Array,
	// 	required: true,
	// },
	// working: {
	// 	type: String,
	// 	required: true,
	// },
	// location: {
	// 	type: String,
	// 	required: true,
	// },
	// job_type: {
	// 	type: String,
	// 	required: true,
	// },
	// salary: {
	// 	type: Number,
	// 	required: true,
	// },
	// max_exp: {
	// 	type: String,
	// 	required: true,
	// },
	// min_exp: {
	// 	type: String,
	// 	required: true,
	// },
	// hiring: {
	// 	type: String,
	// 	required: true,
	// },
	// seniority: {
	// 	type: String,
	// 	required: true,
	// },
});

module.exports = mongoose.model("Form", FormSchema);
