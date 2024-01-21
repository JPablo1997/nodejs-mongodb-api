const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	}
}, { sanitize: true })

module.exports = mongoose.model("User", userScheme)
