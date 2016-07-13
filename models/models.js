var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	score: Number
})

mongoose.model('Team', teamSchema);