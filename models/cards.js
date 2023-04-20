const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
	title: {
		type:String,
		required: true
	},
	text: {
		type:String,
		required: true
	},
	ans: {
		type:String,
		required: true
	}
}, {timestamps: true});

const Cards = mongoose.model('card', cardsSchema);
module.exports = Cards;
