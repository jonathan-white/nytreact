var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
	headline: {type: String, unique: true},
	snippet: String,
	web_url: String,
	source: String,
	section_name: String,
	pub_date: Date,
	notes: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Note"
	    }
	],
	saved: Boolean
});

ArticleSchema.methods.saveArticle = function(){
	this.saved = true;
	return this.saved;
};

ArticleSchema.methods.removeSavedArticle = function(){
	delete this.saved;
};

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;